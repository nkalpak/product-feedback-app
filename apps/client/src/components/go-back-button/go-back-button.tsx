import * as Location from 'react-location';
import { ButtonLink } from '@/components/button/button-link';
import { ChevronLeft } from 'react-feather';
import React from 'react';

interface IGoBackButtonProps {
  className?: string;
}

export function GoBackButton({ className }: IGoBackButtonProps): JSX.Element {
  const navigate = Location.useNavigate();

  function onBack(): void {
    navigate({ to: '../' });
  }

  return (
    <ButtonLink
      className={className}
      onClick={onBack}
      kind="ghost"
      prependIcon={<ChevronLeft size={20} sx={{ color: 'secondary' }} />}
    >
      Go back
    </ButtonLink>
  );
}
