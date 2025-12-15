import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { message, sessionId } = body

    // Gửi message đến n8n webhook
    const response = await fetch('https://n8n.cafencode.ddns.net/webhook/8419b4dc-924d-4c32-825c-a045b02206ec/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: message,
        sessionId: sessionId || 'default_session'
      })
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    
    return NextResponse.json({ 
      success: true, 
      response: data.output || data.response || data.message || 'Xin lỗi, tôi không thể trả lời câu hỏi này lúc này.' 
    })
  } catch (error) {
    console.error('Chat API Error:', error)
    return NextResponse.json({ 
      success: false, 
      error: 'Đã xảy ra lỗi khi xử lý tin nhắn của bạn.' 
    }, { status: 500 })
  }
}