import * as ThemeUi from 'theme-ui';
import * as React from 'react';
import { ProductFeedbackService } from '@/features/product-feedback';
import { RelativeLoadingIndicator } from '@/components/loading-indicator/relative-loading-indicator';
import { isQueryLoading } from '@/utils/react-query/is-query-loading';
import { ProductRequestCard } from '@/features/product-feedback/components';

export function Home(): JSX.Element {
  const getAllProductFeedbacks = ProductFeedbackService.useGetAllProductFeedbacks();

  if (isQueryLoading(getAllProductFeedbacks.isLoading, getAllProductFeedbacks.data)) {
    return <RelativeLoadingIndicator loadingText="Preparing your home page..." />;
  }

  return (
    <ThemeUi.Container sx={{ p: 4 }}>
      <ThemeUi.Flex sx={{ flexDirection: 'column', gap: 4 }}>
        {getAllProductFeedbacks.data.map((productFeedback) => (
          <ProductRequestCard key={productFeedback.id} {...productFeedback} />
        ))}
      </ThemeUi.Flex>
    </ThemeUi.Container>
  );
}
