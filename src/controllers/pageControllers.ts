import type { Request, Response } from 'express';

export const home = (req: Request, res: Response) => {
    // res.send("estou na página HOME");
    res.render("pages/page")
}
export const dogs = (req: Request, res: Response) => {
    // res.send("estou na página DOGs");
    res.render("pages/dogs")
}
export const cats = (req: Request, res: Response) => {
    // res.send("estou na página CATs");
    res.render("pages/cats")
}
export const fishes = (req: Request, res: Response) => {
    // res.send("estou na página FISHEs");
    res.render("pages/fishes");
}




// export default router;