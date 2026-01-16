import { mailValidation } from "../mailValidtation";

describe("mailValidation", () => {
    test("retourne false si pas de @", () => {
        expect(mailValidation("neo.magnaguagno.student.vinci.be")).toBe(false);
    })
    test("retourne false si contient un espace", () => {
        expect(mailValidation("neo magnaguagno@student.vinci.be")).toBe(false);
    })
    test("retourne false si rien devant le @", () => {
        expect(mailValidation("@student.vinci.be")).toBe(false);
    })
    test("retourne false si rien après le @", () => {
        expect(mailValidation("neo.magnaguagno@")).toBe(false);
    })
    test("retourne false si le domaine n'a pas de point", () => {
        expect(mailValidation("neomagnaguagno@studentvincibe")).toBe(false);
    })
    test("retourne false si le point est le dernier caractère du domaine", () => {
        expect(mailValidation("neo.magnaguagno@student.vinci.be.")).toBe(false);
    })
    test("retourne true pour un email valide", () => {
        expect(mailValidation("neo.magnaguagno@student.vinci.be")).toBe(true);
    })

})