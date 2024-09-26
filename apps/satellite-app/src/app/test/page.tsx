import { auth } from '@clerk/nextjs/server';
import { ActionButton } from './_components/ActionButton';
import { callApi, getSessionClaims } from './actions';

export default function Index() {
  const { sessionClaims } = auth();

  return (
    <div>
      <h1>Session Claims</h1>
      <pre>{JSON.stringify(sessionClaims, null, 2)}</pre>
      <ActionButton
        action={getSessionClaims}
        label="Fetch Claims from Server Action"
      />
      <ActionButton action={callApi} label="Call API" />
    </div>
  );
}
