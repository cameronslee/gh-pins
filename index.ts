import {Client} from "./gh-pins";
import {IPinnedItem} from "./gh-pins";
require('dotenv').config()


Client.init(process.env.GITHUB_ACCESS_TOKEN!, process.env.GITHUB_USERNAME!);
Client.getPins().then((repos: IPinnedItem[]) => {console.log(repos)});