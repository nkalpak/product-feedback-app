import * as ThemeUi from 'theme-ui';
import * as React from 'react';
import { ProductFeedbackService } from '@/features/product-feedback';
import { RelativeLoadingIndicator } from '@/components/loading-indicator/relative-loading-indicator';
import { isQueryLoading } from '@/utils/react-query/is-query-loading';
import { ProductRequestCard } from '@/features/product-feedback/components';
import { Api } from '@pfa/api';

export function Home(): JSX.Element {
  const getAllProductFeedbacks = ProductFeedbackService.useGetAllProductFeedbacks();
  const productRequestUpvote = ProductFeedbackService.useProductRequestUpvote();

  if (isQueryLoading(getAllProductFeedbacks.isLoading, getAllProductFeedbacks.data)) {
    return <RelativeLoadingIndicator loadingText="Preparing your home page..." />;
  }

  return (
    <ThemeUi.Container sx={{ p: 4 }}>
      <ThemeUi.Flex sx={{ flexDirection: 'column', gap: 4 }}>
        {getAllProductFeedbacks.data.map((productFeedback) => {
          return (
            <ProductRequestCard
              key={productFeedback.id}
              {...productFeedback}
              onVoteChange={() => {
                productRequestUpvote.mutate({
                  id: productFeedback.id,
                  direction: Api.RawClient.ProductRequestVoteDirection.Upvote,
                });
              }}
            />
          );
        })}
      </ThemeUi.Flex>
    </ThemeUi.Container>
  );
}
