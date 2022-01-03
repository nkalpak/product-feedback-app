import * as React from 'react';
import { Link } from 'react-location';

export function Home(): JSX.Element {
  async function handleSignIn() {
    try {
      const response = await fetch('https://localhost:7174/api/ProductRequest/Authenticate');
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <React.Fragment>
      <Link to="/create-new-feedback">Home!!</Link>

      <div>
        <button onClick={handleSignIn}>Sign in</button>
      </div>
    </React.Fragment>
  );
}
