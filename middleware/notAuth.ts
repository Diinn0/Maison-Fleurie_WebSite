export default defineNuxtRouteMiddleware((to) => {
    const { status } = useSession()
    // Return immeadiatly if user is already authenticated
    if (status.value === 'authenticated') {
        return navigateTo("/admin", { external: true});
    }
    return;
})
