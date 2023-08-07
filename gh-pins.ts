import { gql, GraphQLClient } from "graphql-request";

export interface IPinnedItem {
  name: string;
  id: string;
  url: string;
  stargazers: {
    totalCount: number;
  }
  description: string;
  homepageUrl: string;
}

export class Client {
  static token: string;
  static username: string;
	private static client = new GraphQLClient("https://api.github.com/graphql");
  static init(token: string, username: string) {
    this.token = token;
    this.username = username;
		this.client.setHeader("Authorization", `Bearer ${token}`);
	}

  static async getPins() {
    if (!this.token) {
      throw new Error("No token provided");
    }
    const query = gql`
    {
      user(login: "${this.username}") {
        pinnedItems(first: 6) {
          nodes {
            ... on Repository {
              id
              name
              url
              homepageUrl
              description
              stargazers {
                totalCount
              }
            }
          }
        }
      }
    }
  `;

    const res: any = await this.client.request(query);

    const repos: IPinnedItem[] = res.user.pinnedItems.nodes;
    return repos;
    }
  }





