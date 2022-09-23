module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: "...",
        api_key: "...",
        api_secret: "...",
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  // ...
});