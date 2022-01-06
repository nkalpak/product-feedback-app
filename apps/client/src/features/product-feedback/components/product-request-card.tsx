import { Api } from '@pfa/api';
import { Spacer } from '@/components/spacer/spacer';
import * as ThemeUi from 'theme-ui';
import { Typography } from '@/components/typography/typography';
import { ProductRequestCategories } from '@/features/product-feedback/utils/product-request-categories';
import { ToggleHorizontal } from '@/components/toggle/toggle';
import { ChevronUp, MessageCircle } from 'react-feather';
import * as React from 'react';

interface IProductRequestCardProps
  extends Pick<
    Api.RawClient.ProductRequestDto,
    'title' | 'description' | 'category' | 'upvotes' | 'comments'
  > {}

export function ProductRequestCard({
  title,
  description,
  category,
  comments,
  upvotes,
}: IProductRequestCardProps) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Spacer y={3} />

      <Description>{description}</Description>

      <ThemeUi.Box variant="badges.toggle" sx={{ width: 'fit-content', mt: 2, mb: 4 }}>
        <Typography kind="body1" sx={{ color: 'secondary', fontWeight: 'inherit' }}>
          {ProductRequestCategories[category]}
        </Typography>
      </ThemeUi.Box>

      <ThemeUi.Flex sx={{ justifyContent: 'space-between', alignItems: 'baseline' }}>
        <ToggleHorizontal prependIcon={<ChevronUp width={16} strokeWidth={3} />}>
          <Typography kind="body1" sx={{ fontWeight: 'inherit' }}>
            {upvotes}
          </Typography>
        </ToggleHorizontal>

        <Comments commentsCount={comments.length} />
      </ThemeUi.Flex>
    </Wrapper>
  );
}

function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <ThemeUi.Box sx={{ p: 6, backgroundColor: 'white', borderRadius: 10 }}>{children}</ThemeUi.Box>
  );
}

function Title({ children }: { children: React.ReactNode }) {
  return (
    <Typography kind="h3" sx={{ color: 'darkgrey.medium' }}>
      {children}
    </Typography>
  );
}

function Description({ children }: { children: React.ReactNode }) {
  return (
    <Typography kind="body1" sx={{ color: 'darkgrey.weak' }}>
      {children}
    </Typography>
  );
}

function Comments({ commentsCount }: { commentsCount: number }) {
  return (
    <ThemeUi.Box sx={{ display: 'inline-flex' }}>
      <MessageCircle fill="#CDD2EE" stroke="#CDD2EE" width={20} />
      <Typography kind="body1" sx={{ fontWeight: 700, ml: 2 }}>
        {commentsCount}
      </Typography>
    </ThemeUi.Box>
  );
}
