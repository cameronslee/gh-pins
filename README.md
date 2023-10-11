# Service to fetch Github Pinned Repos

Uses GraphQL to fetch the repos you have pinned on your GitHub Profile.

# Usage

## Include in file
```
import { Client } from "./gh-pins.ts"
```

## Fill in .env with github token and username (see .env.example)

## Instantiate Client

```
// Example
Client.init(process.env.GITHUB_ACCESS_TOKEN, process.env.GITHUB_USERNAME);
Client.getPins().then((repos: IPinnedItem[]) => {console.log(repos)});
```

