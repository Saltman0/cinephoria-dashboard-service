import {app, port} from "./app.ts";

app.listen(port, () => {
    console.log(`Dashboard service : Server is running on port ${port}.`);
});