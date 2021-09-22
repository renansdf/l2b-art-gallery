import Prismic from '@prismicio/client';

const apiEndpoint = 'https://museu.prismic.io/api/v2';
const accessToken = process.env.REACT_APP_API_TOKEN;

const Client = Prismic.client(apiEndpoint, { accessToken });

export default Client;