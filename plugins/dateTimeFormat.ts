export default defineNuxtPlugin(() => {
    return {
        provide: {
            dateFormat: (date: Date) => new Intl.DateTimeFormat('default', {month:'2-digit',day:'2-digit', year:'numeric'}).format(date),
            getAge: (date: Date) => {
                let ageDifMs = Date.now() - date.getTime();
                let ageDate = new Date(ageDifMs); // miliseconds from epoch
                return Math.abs(ageDate.getUTCFullYear() - 1970);
            }
        }
    }
})