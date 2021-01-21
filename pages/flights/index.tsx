import { GetStaticProps } from 'next';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

export default function Flights({ launches }) {

    return (
        <div className="container">

            <div className="grid">
                {launches.map(launch => {
                    return (
                        <a key={launch.id} href={launch.links.video_link} className="card">
                            <h3>{launch.mission_name}</h3>
                            <p><strong>Launch Date:</strong> {new Date(launch.launch_date_local).toLocaleDateString("en-US")}</p>
                        </a>
                    );
                })}
            </div>
        </div>

    );
}

export const getStaticProps: GetStaticProps = async () => {
    const query = gql`
        query GetLaunches {
            launchesPast(limit:10) {
                id
                mission_name
                launch_date_local
                links {
                    article_link
                    video_link
                }
            }
        }
    `;
    const { data } = await client().query({ query });
    const launches = data.launchesPast;

    return {
        props: { launches }
    };
}

const client = () => {
    return new ApolloClient({
        uri: 'https://api.spacex.land/graphql',
        cache: new InMemoryCache()
    });
};
