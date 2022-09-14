import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import mongoose  from 'mongoose'


const dbUrl =  process.env.MONGOOSE_URI || "mongodb://localhost:27017/SHQDB_LOCAL";

export const middleware = async (request: NextRequest) =>{


  // if (mongoose.connections[0].readyState) {
    // Use current db connection
    return NextResponse.next()
  // }


}