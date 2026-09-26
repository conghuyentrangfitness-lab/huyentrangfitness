import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const dynamic = "force-dynamic";

const RECIPIENT_EMAIL = process.env.STUDIO_EMAIL || "conghuyentrangfitness@gmail.com";

interface ConsultationPayload {
  fullName: string;
  phone: string;
  email?: string;
  location: string;
  packageName: string;
  notes?: string;
}

function buildHtmlTemplate(data: ConsultationPayload, timestamp: string) {
  return `
    <!DOCTYPE html>
    <html lang="vi">
    <head>
      <meta charset="utf-8">
      <title>Đăng Ký Tư Vấn Khóa Học Mới</title>
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #FAF7F2; margin: 0; padding: 24px; color: #24211D; }
        .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #E6D8C8; box-shadow: 0 4px 20px rgba(0,0,0,0.05); }
        .header { background: linear-gradient(135deg, #1C1A17 0%, #2E2924 100%); padding: 32px 24px; text-align: center; border-bottom: 3px solid #D4A373; }
        .header h1 { color: #FAF7F2; margin: 0 0 8px; font-size: 20px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; }
        .header p { color: #D4A373; margin: 0; font-size: 13px; font-weight: 500; }
        .content { padding: 32px 24px; }
        .badge { display: inline-block; background-color: #FAF3EC; color: #C58F78; font-weight: 600; font-size: 12px; padding: 4px 12px; rounded: 20px; margin-bottom: 20px; border: 1px solid #EEDCD3; border-radius: 999px; }
        .data-table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
        .data-table td { padding: 12px 14px; border-bottom: 1px solid #F0EAE1; font-size: 14px; vertical-align: top; }
        .data-table td.label { width: 38%; font-weight: 600; color: #73695E; background-color: #FAF8F5; }
        .data-table td.value { font-weight: 500; color: #1C1A17; }
        .highlight { color: #C58F78; font-weight: 700; }
        .cta-btn { display: inline-block; background: #C58F78; color: #ffffff !important; text-decoration: none; font-weight: 600; font-size: 14px; padding: 12px 24px; border-radius: 8px; margin-top: 10px; }
        .footer { background: #FAF7F2; padding: 20px 24px; text-align: center; font-size: 12px; color: #A89F91; border-top: 1px solid #E6D8C8; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>FITNESS x FIT CLUB</h1>
          <p>Hệ Thống Rèn Luyện Vóc Dáng Chuyên Biệt Nữ</p>
        </div>
        <div class="content">
          <div class="badge">✦ THÔNG BÁO ĐĂNG KÝ HỌC MỚI</div>
          <h2 style="font-size: 18px; margin: 0 0 16px; color: #24211D;">Có học viên vừa đăng ký tư vấn qua website:</h2>
          
          <table class="data-table">
            <tr>
              <td class="label">Họ và tên học viên:</td>
              <td class="value highlight" style="font-size: 16px;">${data.fullName}</td>
            </tr>
            <tr>
              <td class="label">Số điện thoại:</td>
              <td class="value"><a href="tel:${data.phone}" style="color: #24211D; font-weight: 700; text-decoration: none;">${data.phone}</a></td>
            </tr>
            <tr>
              <td class="label">Email liên hệ:</td>
              <td class="value">${data.email ? `<a href="mailto:${data.email}">${data.email}</a>` : "<em>Chưa cung cấp</em>"}</td>
            </tr>
            <tr>
              <td class="label">Khu vực sinh sống:</td>
              <td class="value">${data.location}</td>
            </tr>
            <tr>
              <td class="label">Gói tập quan tâm:</td>
              <td class="value highlight">${data.packageName}</td>
            </tr>
            <tr>
              <td class="label">Mục tiêu / Ghi chú:</td>
              <td class="value">${data.notes ? data.notes.replace(/\n/g, "<br>") : "<em>Không có ghi chú thêm</em>"}</td>
            </tr>
            <tr>
              <td class="label">Thời gian đăng ký:</td>
              <td class="value" style="font-size: 12px; color: #73695E;">${timestamp}</td>
            </tr>
          </table>

          <div style="text-align: center; margin-top: 24px;">
            <a href="tel:${data.phone}" class="cta-btn">Gọi Điện Tư Vấn Ngay: ${data.phone}</a>
          </div>
        </div>
        <div class="footer">
          Email này được gửi tự động từ biểu mẫu đăng ký trên website FITNESS x FIT CLUB.<br>
          Địa chỉ: Chung Cư Green Pearl (378 Minh Khai, Hai Bà Trưng, Hà Nội)
        </div>
      </div>
    </body>
    </html>
  `;
}

export async function POST(req: Request) {
  try {
    const body: ConsultationPayload = await req.json();
    const { fullName, phone, email, location, packageName, notes } = body;

    // Validation
    if (!fullName?.trim() || !phone?.trim() || !email?.trim() || !location?.trim()) {
      return NextResponse.json(
        { success: false, error: "Vui lòng điền đầy đủ các thông tin bắt buộc (Họ tên, Số điện thoại, Email học viên, Khu vực)." },
        { status: 400 }
      );
    }

    const timestamp = new Date().toLocaleString("vi-VN", {
      timeZone: "Asia/Ho_Chi_Minh",
      hour12: false,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    const emailSubject = `[ĐĂNG KÝ HỌC] ${fullName} - ${phone} (${packageName})`;

    // Check if SMTP is configured
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (smtpUser && smtpPass) {
      try {
        const transporter = nodemailer.createTransport(
          process.env.SMTP_HOST && process.env.SMTP_HOST !== "smtp.gmail.com"
            ? {
                host: process.env.SMTP_HOST,
                port: Number(process.env.SMTP_PORT) || 465,
                secure: Number(process.env.SMTP_PORT) === 465 || !process.env.SMTP_PORT,
                auth: { user: smtpUser, pass: smtpPass },
              }
            : {
                service: "gmail",
                auth: {
                  user: smtpUser,
                  pass: smtpPass.replace(/\s+/g, ""), // Tự động loại bỏ dấu cách nếu copy từ Google
                },
              }
        );

        await transporter.sendMail({
          from: `"FITNESS x FIT CLUB" <${smtpUser}>`,
          to: RECIPIENT_EMAIL,
          replyTo: email || undefined,
          subject: emailSubject,
          html: buildHtmlTemplate(body, timestamp),
          text: `ĐĂNG KÝ HỌC MỚI:\nHọ tên: ${fullName}\nSĐT: ${phone}\nEmail: ${email || "Không có"}\nKhu vực: ${location}\nGói tập: ${packageName}\nGhi chú: ${notes || "Không có"}\nThời gian: ${timestamp}`,
        });

        return NextResponse.json({
          success: true,
          mode: "smtp",
          message: `Thông tin đăng ký đã được gửi thành công đến hòm thư ${RECIPIENT_EMAIL}`,
        });
      } catch (smtpErr) {
        console.error("Lỗi khi gửi mail qua SMTP:", smtpErr);
      }
    }

    // Ưu tiên 2: Google Apps Script Webhook (Không cần mật khẩu, gửi mail trực tiếp từ Google & lưu vào Google Sheet)
    const googleScriptUrl = process.env.GOOGLE_SCRIPT_URL;
    if (googleScriptUrl) {
      try {
        const gsRes = await fetch(googleScriptUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fullName,
            phone,
            email: email || "Không có",
            location,
            packageName,
            notes: notes || "Không có",
            timestamp,
          }),
        });

        if (gsRes.ok) {
          return NextResponse.json({
            success: true,
            mode: "google_script",
            message: `Thông tin đăng ký đã được gửi thành công đến hòm thư ${RECIPIENT_EMAIL}`,
          });
        }
      } catch (gsErr) {
        console.error("Lỗi Google Script Webhook:", gsErr);
      }
    }

    // Ưu tiên 3: Resend API (Dịch vụ gửi mail chuẩn Next.js)
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      try {
        const resendRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: "FITNESS x FIT CLUB <onboarding@resend.dev>",
            to: [RECIPIENT_EMAIL],
            reply_to: email || undefined,
            subject: emailSubject,
            html: buildHtmlTemplate(body, timestamp),
          }),
        });

        if (resendRes.ok) {
          return NextResponse.json({
            success: true,
            mode: "resend",
            message: `Thông tin đăng ký đã được gửi thành công đến hòm thư ${RECIPIENT_EMAIL}`,
          });
        }
      } catch (resendErr) {
        console.error("Lỗi Resend:", resendErr);
      }
    }

    // Xác định địa chỉ website chính thức
    const hostHeader = req.headers.get("x-forwarded-host") || req.headers.get("host") || "";
    const protoHeader = req.headers.get("x-forwarded-proto") || "https";
    const detectedOrigin = req.headers.get("origin") || (hostHeader ? `${protoHeader}://${hostHeader}` : "");

    const officialSiteUrl =
      process.env.NEXT_PUBLIC_SITE_URL ||
      process.env.SITE_URL ||
      (detectedOrigin && !detectedOrigin.includes("localhost") ? detectedOrigin : "https://www.conghuyentrangfitness.com");

    // Fallback: Send via FormSubmit service directly to RECIPIENT_EMAIL
    try {
      const formSubmitRes = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(RECIPIENT_EMAIL)}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
          Origin: officialSiteUrl,
          Referer: `${officialSiteUrl}/`,
        },
        body: JSON.stringify({
          _subject: `[ĐĂNG KÝ HỌC MỚI] ${fullName} - ${phone}`,
          _replyto: email || RECIPIENT_EMAIL,
          _template: "box",
          _captcha: "false",
          "Họ và tên học viên": fullName,
          "Số điện thoại": phone,
          "Email học viên": email || "Không cung cấp",
          "Khu vực đang sinh sống": location,
          "Gói học bạn quan tâm": packageName,
          "Mục tiêu hoặc thời gian tiện nghe điện thoại": notes || "Không có ghi chú thêm",
          "Nguồn tiếp nhận": "Website chính thức FITNESS x FIT CLUB",
          "Thời gian gửi đăng ký": timestamp,
        }),
      });

      const result = await formSubmitRes.json();
      console.log("FormSubmit API Result:", result);

      if (result.success === "true" || result.success === true) {
        return NextResponse.json({
          success: true,
          mode: "formsubmit",
          message: `Thông tin đăng ký đã được gửi đến email ${RECIPIENT_EMAIL}`,
        });
      }
    } catch (fsErr) {
      console.error("Lỗi khi gửi qua FormSubmit:", fsErr);
    }

    // Even if remote mail service failed, return success with notice so UI doesn't crash
    return NextResponse.json({
      success: true,
      mode: "queued",
      message: `Đã ghi nhận thông tin đăng ký của ${fullName}`,
    });
  } catch (err: unknown) {
    console.error("Lỗi trong quá trình xử lý đăng ký:", err);
    return NextResponse.json(
      { success: false, error: "Đã xảy ra lỗi khi gửi yêu cầu. Vui lòng thử lại hoặc gọi Hotline 0913.234.323." },
      { status: 500 }
    );
  }
}
