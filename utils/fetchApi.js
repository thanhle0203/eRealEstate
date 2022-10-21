import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'

// headers: {
    // 'X-RapidAPI-Key': '99db9032f2mshb0ea01c4f918384p1acfb6jsnaec49441eafe',
    // 'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
// }

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'X-RapidAPI-Key': '99db9032f2mshb0ea01c4f918384p1acfb6jsnaec49441eafe',
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
    }
  })
}