import { rest } from "msw"

export const handlers = [
    rest.get(
        '*/react-query',
        (req, res, ctx) => {
            return res(
                ctx.status(200),
                ctx.json({
                    name: 'mocked-react-query'
                })
            )
        }
    )
]