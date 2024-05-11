import { init } from '@/modules/__app__';

(async () => {
  try {
    await init();
  } catch (error) {
    console.error(`Error occurred in entrypoint!`, error);

    throw error;
  }
})();
