import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
Amplify.configure(awsExports);

import { Auth } from 'aws-amplify';

async function signOut() {
    try {
        await Auth.signOut();
    } catch (error) {
        console.log('error signing out: ', error);
    }
}

function App() {
  return (
    <>
      <h1>Hello undefined</h1>
      <button onClick={signOut}>Sign out</button>
    </>
  );
}

export default withAuthenticator(App);

// import '@aws-amplify/ui-react/styles.css';
// import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
// import { Amplify } from 'aws-amplify';
// // import Home from './pages/home';
// import { withAuthenticator } from '@aws-amplify/ui-react';

// const config = {
//   apiUrl: 'https://status-alerts.test.dovetailnow.com/api',
//   cognito: {
//     aws_project_region: 'us-west-2',
//     aws_cognito_region: 'us-west-2',
//     aws_cognito_identity_pool_id: '',
//     aws_user_pools_id: 'us-west-2_TvI3ruKim',
//     aws_user_pools_web_client_id: '4jmtnd4196fsmq2t7ukslbh8no',
//   },
// };

// Amplify.configure(config.cognito);

// function Home() {
//   return <div>Home</div>;
// }

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//       </Routes>
//     </Router>
//   );
// }

// export default withAuthenticator(App, { hideSignUp: true });

// import React from 'react';
// import { combineLatest } from 'rxjs';
// import './App.css';
// import { bootstrap } from './Bootstrap';
// import { ServiceProvider } from '@aesop-fables/containr-react';
// import { useObservable, useProjection } from '@aesop-fables/scrinium';
// import { FindVideoByIdProjection, VideoLibrary } from './videos/VideoProjections';

// const container = bootstrap();

// function App() {
//   return (
//     <ServiceProvider rootContainer={container}>
//       <div className="App">
//         <header className="App-header">
//           <img src="./logo.svg" className="App-logo" alt="logo" width="200" />
//           <p>
//             Edit <code>src/App.tsx</code> and save to reload.
//           </p>
//           <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
//             Learn React
//           </a>
//         </header>
//         <VideoGallery />
//       </div>
//     </ServiceProvider>
//   );
// }

// const VideoGallery: React.FC = () => {
//   const { loading$, library$ } = useProjection(VideoLibrary);
//   const [loading, library] = useObservable(combineLatest([loading$, library$])) ?? [true, []];

//   if (loading) {
//     return (
//       <>
//         <p>Loading...</p>
//       </>
//     );
//   }

//   return (
//     <>
//       <ul>
//         {library.map((item) => (
//           <li key={item.id}>
//             <a href={`/videos/${item.id}`}>
//               <h3>{item.title}</h3>
//             </a>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };

// interface VideoViewerProps {
//   videoId: string;
// }

// const VideoViewer: React.FC<VideoViewerProps> = ({ videoId }) => {
//   const { loading$, video$ } = useProjection(new FindVideoByIdProjection(videoId));
//   const [loading, video] = useObservable(combineLatest([loading$, video$])) ?? [true, undefined];
//   if (loading) {
//     return (
//       <>
//         <p>Loading...</p>
//       </>
//     );
//   }

//   return (
//     <>
//       <h3>{video?.title}</h3>
//       {/* <VideoPlayer url={video?.url} /> */}
//     </>
//   );
// };

// export default App;
