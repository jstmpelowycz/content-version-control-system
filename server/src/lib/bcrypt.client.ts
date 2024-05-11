import * as bcrypt from 'bcrypt';

export const bcryptClient = {
  hash: async (password: string) => {
    const salt = await bcrypt.genSalt();

    return bcrypt.hash(password, salt);
  },

  compare: bcrypt.compare,
};
