import axios from 'axios';

export default {
  /**
   * Получаем данные из github api о репозиториях по строка поиска
   * @param  {string} subject
   */
  GetRepos: async (subject: string): Promise<object[]> => {
    try {
      const { data } = await axios.get(`https://api.github.com/search/repositories?q=${subject}`);
      return data.items;
    } catch (e) {
      throw new Error(e.response.data.message);
    }
  },
};
