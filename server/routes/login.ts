export default defineEventHandler((event) => {
    if (event.node.req.method == "POST") {

    }

    event.context.auth = true;
})