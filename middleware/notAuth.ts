export default defineNuxtRouteMiddleware((to) => {
    const { status } = useAuth()
    // Return immeadiatly if user is already authenticated
    if (status.value === 'authenticated') {
        return navigateTo("/admin", { external: true});
    }
    return;
})
