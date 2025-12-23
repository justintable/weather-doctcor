# 护肝卫士 - 脂肪肝科学康复计划

这是一个专为脂肪肝患者（特别是家属）设计的科学调整平台。

## 如何生成在线网址？

1. **上传到 GitHub**：将所有文件推送到你的 GitHub 仓库。
2. **使用 Vercel 部署**：
   - 访问 [Vercel](https://vercel.com/) 并登录。
   - 点击 **"Add New"** -> **"Project"**。
   - 导入你的 GitHub 仓库。
   - **设置 API Key**：在部署页面的 `Environment Variables` 中添加：
     - **Key**: `API_KEY`
     - **Value**: 你的 Google Gemini API Key
   - 点击 **"Deploy"**。
3. **完成**：Vercel 会给你一个 `.vercel.app` 结尾的网址，发给爱人即可打开。

## 核心功能
- **智能对话**：基于 Gemini 3 Pro 的专业护肝建议。
- **饮食计划**：地中海饮食模式推荐。
- **运动指导**：有氧与抗阻力训练结合。
- **知识科普**：深入浅出的指标解读。

## 开发指南
```bash
npm install
npm run dev
```