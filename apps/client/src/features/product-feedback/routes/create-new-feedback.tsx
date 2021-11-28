/** @jsxImportSource theme-ui */
import { CreateNewFeedbackForm } from '@/features/product-feedback/components';
import React from 'react';
import { Plus } from 'react-feather';
import { PageFormWrapper } from '@/components/page-form-wrapper';

export function CreateNewFeedback(): JSX.Element {
  return (
    <PageFormWrapper title="Create new feedback" icon={<Plus />}>
      <CreateNewFeedbackForm />
    </PageFormWrapper>
  );
}
