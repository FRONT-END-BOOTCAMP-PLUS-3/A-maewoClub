"use client";

export const exchangeCodeForToken = async (
  code: string,
  provider: "google" | "kakao"
): Promise<{ accessToken: string; email: string } | null> => {
  try {
    console.log(`${provider.toUpperCase()} Authorization Code:`, code);

    const config = {
      google: {
        tokenUrl: "https://oauth2.googleapis.com/token",
        userInfoUrl: "https://www.googleapis.com/oauth2/v2/userinfo",
        clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
        clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET!,
        redirectUri: `${process.env.NEXT_PUBLIC_SITE_URL}/auth`,
      },
      kakao: {
        tokenUrl: "https://kauth.kakao.com/oauth/token",
        userInfoUrl: "https://kapi.kakao.com/v2/user/me",
        clientId: process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID!,
        redirectUri: `${process.env.NEXT_PUBLIC_SITE_URL}/auth`,
      },
    };

    const providerConfig = config[provider];
    if (!providerConfig) {
      throw new Error(`❌ 지원되지 않는 OAuth Provider: ${provider}`);
    }

    const bodyParams = new URLSearchParams({
      client_id: providerConfig.clientId,
      redirect_uri: providerConfig.redirectUri,
      grant_type: "authorization_code",
      code,
    });

    if (provider === "google") {
      bodyParams.append("client_secret", config.google.clientSecret!);
    }

    const response = await fetch(providerConfig.tokenUrl, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: bodyParams,
    });

    const tokenData = await response.json();
    if (!tokenData.access_token) {
      throw new Error(`❌ ${provider.toUpperCase()} Access Token을 받지 못함`);
    }

    const userInfoResponse = await fetch(providerConfig.userInfoUrl, {
      headers: { Authorization: `Bearer ${tokenData.access_token}` },
    });

    const userInfo = await userInfoResponse.json();
    const email =
      provider === "google" ? userInfo.email : userInfo.kakao_account.email;

    return { accessToken: tokenData.access_token, email };
  } catch (error) {
    console.error(
      `❌ ${provider.toUpperCase()} OAuth 처리 중 오류 발생:`,
      error
    );
    return null;
  }
};
