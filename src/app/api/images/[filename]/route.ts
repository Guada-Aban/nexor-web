import { readFileSync } from 'fs'
import { join } from 'path'
import { NextResponse } from 'next/server'

export async function GET(
  request: Request,
  { params }: { params: Promise<{ filename: string }> }
) {
  try {
    const { filename } = await params
    const filepath = join(process.cwd(), 'public', 'images', filename)
    const file = readFileSync(filepath)
    
    const ext = filename.split('.').pop()
    const contentType = ext === 'jpg' || ext === 'jpeg' 
      ? 'image/jpeg' 
      : ext === 'png' 
      ? 'image/png' 
      : 'image/webp'

    return new NextResponse(file, {
      headers: { 'Content-Type': contentType }
    })
  } catch {
    return new NextResponse('Not found', { status: 404 })
  }
}