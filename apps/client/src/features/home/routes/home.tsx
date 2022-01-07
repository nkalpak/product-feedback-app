import * as ThemeUi from 'theme-ui';
import * as React from 'react';
import * as RLocation from 'react-location';
import { ProductFeedbackService } from '@/features/product-feedback';
import { RelativeLoadingIndicator } from '@/components/loading-indicator/relative-loading-indicator';
import { isQueryLoading } from '@/utils/react-query/is-query-loading';
import { ProductRequestCard } from '@/features/product-feedback/components';
import { Api } from '@pfa/api';
import { SelectGhost } from '@/components/select/select-ghost';
import { LocationGenerics } from '@/lib/react-location';
import { Button } from '@/components/button/button';
import { Plus } from 'react-feather';

const sortByOptions = [
  {
    value: String(Api.RawClient.ProductRequestSortBy.MostComments),
    label: 'Most Comments',
  },
  {
    value: String(Api.RawClient.ProductRequestSortBy.MostUpvotes),
    label: 'Most Upvotes',
  },
];

const DEFAULT_SORT_BY = Api.RawClient.ProductRequestSortBy.MostComments;

export function Home(): JSX.Element {
  const search = RLocation.useSearch<LocationGenerics>();
  const navigate = RLocation.useNavigate<LocationGenerics>();

  React.useEffect(() => {
    // eslint-disable-next-line eqeqeq
    if (search.homeView?.sortBy != null) {
      return;
    }

    navigate({
      search: {
        homeView: {
          sortBy: DEFAULT_SORT_BY,
        },
      },
    });
  }, [navigate, search.homeView?.sortBy]);

  return (
    <ThemeUi.Box sx={{ isolation: 'isolate' }}>
      <ThemeUi.Flex
        sx={{
          zIndex: 1,
          top: 0,
          position: 'sticky',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: 'darkgrey.strong',
          px: 6,
          py: 2,
        }}
      >
        <SelectGhost
          sx={{ color: 'white' }}
          onChange={(event) =>
            navigate({
              replace: true,
              search: {
                homeView: {
                  sortBy: event.target.value as unknown as Api.RawClient.ProductRequestSortBy,
                },
              },
            })
          }
          value={search.homeView?.sortBy}
          options={sortByOptions}
          label="Sort by:"
        />

        <RLocation.Link to="/create-new-feedback">
          <Button prependIcon={<Plus strokeWidth={4} width={12} />}>Add Feedback</Button>
        </RLocation.Link>
      </ThemeUi.Flex>

      <ThemeUi.Container sx={{ p: 6, position: 'relative', flexGrow: 1 }}>
        <ProductFeedbackList />
      </ThemeUi.Container>
    </ThemeUi.Box>
  );
}

function ProductFeedbackList() {
  const search = RLocation.useSearch<LocationGenerics>();

  const productRequestUpvote = ProductFeedbackService.useProductRequestUpvote();
  const getAllProductFeedbacks = ProductFeedbackService.useGetAllProductFeedbacks({
    sortBy: search.homeView?.sortBy ?? DEFAULT_SORT_BY,
  });

  if (isQueryLoading(getAllProductFeedbacks.isLoading, getAllProductFeedbacks.data)) {
    return <RelativeLoadingIndicator loadingText="Preparing your home page..." />;
  }

  return (
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
  );
}
