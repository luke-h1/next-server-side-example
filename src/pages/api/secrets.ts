// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import getConfig from 'next/config'

type Data = {
  secrets: {
    USERNAME: string,
    PASSWORD: string
  }
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  // this will only be available on the server side
  // we're just returning them to the client side for demo purposes
  // dont do this in production xdd
  const { USERNAME, PASSWORD } = getConfig().serverRuntimeConfig;

  res.status(200).json({
    secrets: {
      USERNAME,
      PASSWORD
    }
  })
}
