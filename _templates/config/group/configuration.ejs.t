---
to: <%= h.projectRoot %>/config/<%= h.lcFirst(name) %>/sample.ts
---
export const sample = {
  dev: {
    public: false,
  },
  production: {
    public: false,
  }
};
