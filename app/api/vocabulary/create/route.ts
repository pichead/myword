import { prisma } from '@/prisma'
import { resError, resOk } from '@/utility'
import type { NextApiRequest, NextApiResponse } from 'next'


export async function POST(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        console.log("on post request")
        console.log(req.body)

        const { word, meaning } = req.body

        const findWord = await prisma.vocabulary.findUnique(word)

        if (!findWord) {

            const create = await prisma.vocabulary.create({
                data: {
                    word: word,
                    meaning: meaning
                }
            })

            if (create) {

                res.status(200).json(resOk(200, "success create", "สร้างข้อมูลสำเร็จ", create))
            }
            else {
                res.status(400).json(resError(400, "error creating", "สร้างข้อมูลไม่สำเร็จ"))
            }

        }
        else {
            res.status(400).json(resError(400, "Error this word is exited", "มีคำนี้ในระบบแล้ว"))
        }

    } catch (error) {
        res.status(500).json(resError(400, "Internal server error", "มีข้อผิดพลาดในระบบ"))
    }
    console.log("complete route2")

}


