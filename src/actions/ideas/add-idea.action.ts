'use server';
import { prisma } from '@/lib/prisma';
import { Idea } from '@prisma/client';
import { z } from 'zod';
import { getProfile } from '../auth/get-profile';

const IdeaFormSchema = z.object({
  title: z
    .string()
    .min(2, {
      message: 'Title must be at least 2 characters.',
    })
    .trim(),
  content: z
    .string()
    .min(10, {
      message: 'Description must be at least 10 characters.',
    })
    .trim(),
  published: z.boolean({
    required_error: 'published is required',
    invalid_type_error: 'isActive must be a boolean',
  }),
});

export type FormSchema = z.infer<typeof IdeaFormSchema>;

interface AddIdeaResponse {
  errors?: any;
  success: boolean;
  data?: Idea | any;
}

export async function addIdea(state: any, formData: FormData): Promise<AddIdeaResponse> {
  const user = await getProfile();

  const validatedFields = IdeaFormSchema.safeParse({
    title: formData.get('title'),
    content: formData.get('content'),
    published: formData.get('published') === 'yes',
  });

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  } else {
    if (user) {
      return await prisma.idea
        .create({
          data: {
            title: validatedFields.data.title,
            content: validatedFields.data.content,
            published: validatedFields.data.published,
            userId: user?.id,
          },
        })
        .catch((error) => {
          return {
            errors: error,
            success: false,
          };
        })
        .then((createdIdea) => {
          return {
            success: true,
            data: createdIdea,
          };
        });
    } else {
      return {
        success: false,
        errors: {
          status: 'error',
          message: 'User not found',
        },
      };
    }
  }
}
