import { Helmet } from 'react-helmet';

interface IHeadProps {
  title?: string;
  description?: string;
}

export function Head({ title = '', description = '' }: IHeadProps): JSX.Element {
  return (
    <Helmet title={title ? `${title} | MyApp` : undefined} defaultTitle="MyApp">
      <meta name="description" content={description} />
    </Helmet>
  );
}
