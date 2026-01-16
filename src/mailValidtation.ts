export function mailValidation(email: string): boolean {
    if(typeof email !== "string") return false;

    if(email.includes(" ")) return false;

    const index = email.indexOf("@");
    if(index === -1) return false;

    if(index === 0) return false;
    if(index === email.length-1) return false;

    const domaine = email.slice(index + 1)

    const point = domaine.indexOf(".");
    if(point === -1) return false;

    const dernierPoint = domaine.lastIndexOf(".");
    if(dernierPoint === domaine.length - 1) return false;


return true;
}