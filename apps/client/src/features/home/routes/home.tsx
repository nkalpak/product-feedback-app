import * as ThemeUi from 'theme-ui';
import * as R from 'remeda';
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
import { Menu, Plus } from 'react-feather';
import { Typography } from '@/components/typography/typography';
import { useToggle } from '@/utils';
import { ScrollBlock } from '@/components/scroll-block/scroll-block';
import { Toggle } from '@/components/toggle/toggle';
import { ProductRequestCategories } from '@/features/product-feedback/utils/product-request-categories';
import { Close } from 'theme-ui';
import produce from 'immer';

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

function getEnumValues<T extends Record<string, string | number>>(e: T): T[] {
  const keys = Object.keys(e).filter((key) => isNaN(Number(key)));
  return keys.map((key) => e[key]).filter(R.identity) as unknown as T[];
}

const ALL_PRODUCT_REQUEST_CATEGORIES = getEnumValues(
  Api.RawClient.ProductRequestCategory
) as unknown as Api.RawClient.ProductRequestCategory[];
const DEFAULT_SORT_BY = Api.RawClient.ProductRequestSortBy.MostComments;
const DEFAULT_FILTER_BY = ALL_PRODUCT_REQUEST_CATEGORIES;

export function Home(): JSX.Element {
  const search = RLocation.useSearch<LocationGenerics>();
  const navigate = RLocation.useNavigate<LocationGenerics>();

  const [isSideMenuOpen, toggleSideMenuOpen] = useToggle();

  const sortBy = search.homeView?.sortBy ?? DEFAULT_SORT_BY;
  const filterBy = search.homeView?.filterBy ?? DEFAULT_FILTER_BY;

  React.useEffect(() => {
    navigate({
      search: {
        homeView: {
          sortBy,
          filterBy,
        },
      },
    });
  }, [filterBy, navigate, sortBy]);

  return (
    <ThemeUi.Box
      sx={{
        isolation: 'isolate',
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <ThemeUi.Flex
        sx={{
          zIndex: 3,
          px: 6,
          py: 4,
          color: 'white',
          background:
            'radial-gradient(128.88% 128.88% at 103.9% -10.39%, #E84D70 0%, #A337F6 53.09%, #28A7ED 100%)',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <ThemeUi.Box>
          <Typography kind="h3">Product Feedback App</Typography>
          <Typography kind="body2">Feedback Board</Typography>
        </ThemeUi.Box>

        {isSideMenuOpen ? (
          <Close onClick={() => toggleSideMenuOpen()} />
        ) : (
          <ThemeUi.IconButton onClick={() => toggleSideMenuOpen()} sx={{ p: 0 }}>
            <Menu />
          </ThemeUi.IconButton>
        )}
      </ThemeUi.Flex>

      <ThemeUi.Box
        sx={{ position: 'relative', flexGrow: 1, display: 'flex', flexDirection: 'column' }}
      >
        <ThemeUi.Box
          sx={{
            zIndex: 1,
            top: 0,
            position: 'sticky',
          }}
        >
          <ThemeUi.Flex
            sx={{
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
        </ThemeUi.Box>

        <ThemeUi.Container sx={{ p: 6, position: 'relative', flexGrow: 1 }}>
          <ProductRequestList />
        </ThemeUi.Container>

        {isSideMenuOpen && <ProductRequestSideMenu />}
      </ThemeUi.Box>
    </ThemeUi.Box>
  );
}

function ProductRequestSideMenu() {
  const search = RLocation.useSearch<LocationGenerics>();
  const navigate = RLocation.useNavigate<LocationGenerics>();

  const filterBy = search.homeView?.filterBy;

  return (
    <ThemeUi.Box
      sx={{
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        width: '100%',
        position: 'absolute',
        height: '100%',
        zIndex: 2,
        display: 'flex',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
      }}
    >
      <ThemeUi.Box
        sx={{ backgroundColor: 'lightgrey', width: '50%', minWidth: 270, ml: 'auto', p: 6 }}
      >
        <ThemeUi.Flex
          sx={{
            backgroundColor: 'white',
            p: 6,
            borderRadius: 10,
            flexWrap: 'wrap',
            columnGap: 2,
            rowGap: 4,
          }}
        >
          <Toggle
            pressed={search.homeView?.filterBy?.length === ALL_PRODUCT_REQUEST_CATEGORIES.length}
            onPressedChange={(pressed) => {
              navigate({
                replace: true,
                search: (prev) => {
                  if (!prev) return {};

                  return produce(prev, (draft) => {
                    if (!draft.homeView?.filterBy) return prev;
                    draft.homeView.filterBy = pressed ? ALL_PRODUCT_REQUEST_CATEGORIES : [];
                  });
                },
              });
            }}
          >
            All
          </Toggle>

          {ALL_PRODUCT_REQUEST_CATEGORIES.map((category) => {
            return (
              <Toggle
                key={category}
                pressed={filterBy?.includes(category)}
                onPressedChange={() => {
                  navigate({
                    replace: true,
                    search(prev) {
                      if (!prev) return {};

                      return produce(prev, (draft) => {
                        if (draft.homeView?.filterBy?.includes(category)) {
                          draft.homeView.filterBy = draft.homeView.filterBy.filter(
                            (c) => c !== category
                          );
                        } else {
                          draft.homeView?.filterBy?.push(category);
                        }
                      });
                    },
                  });
                }}
              >
                {ProductRequestCategories[category]}
              </Toggle>
            );
          })}
        </ThemeUi.Flex>
      </ThemeUi.Box>

      <ScrollBlock />
    </ThemeUi.Box>
  );
}

function ProductRequestList() {
  const search = RLocation.useSearch<LocationGenerics>();

  const productRequestUpvote = ProductFeedbackService.useProductRequestUpvote();
  const getAllProductFeedbacks = ProductFeedbackService.useGetAllProductFeedbacks({
    sortBy: search.homeView?.sortBy ?? DEFAULT_SORT_BY,
    filterBy: search.homeView?.filterBy ?? DEFAULT_FILTER_BY,
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
