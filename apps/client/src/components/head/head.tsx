import { Helmet } from 'react-helmet';

type HeadProps = {
  title?: string;
  description?: string;
};

export function Head({ title = '', description = '' }: HeadProps) {
  return (
    <Helmet title={title ? `${title} | MyApp` : undefined} defaultTitle="MyApp">
      <meta name="description" content={description} />
    </Helmet>
  );
}
