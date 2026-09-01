import { useQuery, gql, useMutation, useLazyQuery } from "@apollo/react-hooks";
import {
  EDIT_HOME_PAGE,
  EDIT_KPI,
  GET_HOME_PAGE,
  GET_KPI,
  SORT_HOME_PAGE,
  SORT_KPI,
} from "@apolloo/queries/home";

export const useGetHomeWork = () => useQuery(GET_HOME_PAGE, {});

export const useGetHomeKpi = () => useQuery(GET_KPI, {});
export const useEditHomePageWork = () =>
  useMutation(EDIT_HOME_PAGE, {
    update(cache, { data: { editHomePageWork } }) {
      const { getHomeWork }: any = cache.readQuery({
        query: GET_HOME_PAGE,
      });

      try {
        const arr = getHomeWork;

        const objIndex = getHomeWork.findIndex(
          (set) => set.id === editHomePageWork.id
        );
        arr[objIndex] = editHomePageWork;

        // const {getAllAmbassadors}:any = cache.readQuery({query:GET_ALL_AMASS})

        cache.writeQuery({
          query: GET_HOME_PAGE,
          data: { getHomeWork: [...arr] },
        });
        // const data = [...getHomeWork, addServices];

        // cache.writeQuery({
        //   query:GET_HOME_PAGE,
        //   data: { getHomeWork: [...data] },
        // });

        // toast.success(`${addServices.memberName} add to team `);
      } catch (err) {
        console.log(err);
      }
    },
  });

export const useEditKpi = () =>
  useMutation(EDIT_KPI, {
    update(cache, { data: { editKpi } }) {
      const {  getAllKpi }: any = cache.readQuery({
        query: GET_HOME_PAGE,
      });

      try {
        const arr =  getAllKpi;

        const objIndex =  getAllKpi.findIndex((set) => set.id === editKpi.id);
        arr[objIndex] = editKpi;

        // const {getAllAmbassadors}:any = cache.readQuery({query:GET_ALL_AMASS})

        cache.writeQuery({
          query: GET_HOME_PAGE,
          data: {  getAllKpi: [...arr] },
        });
        // const data = [... getAllKpi, addServices];

        // cache.writeQuery({
        //   query:GET_HOME_PAGE,
        //   data: { getHomeWork: [...data] },
        // });

        // toast.success(`${addServices.memberName} add to team `);
      } catch (err) {
        console.log(err);
      }
    },
  });

export const useSortHomePage = () =>
  useMutation(SORT_HOME_PAGE, {
    update(cache, { data: { sortHomePage } }) {
      try {
        // const {getAllAmbassadors}:any = cache.readQuery({query:GET_ALL_AMASS})

        cache.writeQuery({
          query: GET_HOME_PAGE,
          data: { getHomeWork: sortHomePage },
        });
        // const data = [...getHomeWork, addServices];

        // cache.writeQuery({
        //   query:GET_HOME_PAGE,
        //   data: { getHomeWork: [...data] },
        // });

        // toast.success(`${addServices.memberName} add to team `);
      } catch (err) {
        console.log(err);
      }
    },
  });

export const useSortKpi = () =>
  useMutation(SORT_KPI, {
    update(cache, { data: { sortKpi } }) {
      try {
        // const {getAllAmbassadors}:any = cache.readQuery({query:GET_ALL_AMASS})

        cache.writeQuery({
          query: GET_KPI,
          data: { getAllKpi: sortKpi },
        });
        // const data = [...getHomeWork, addServices];

        // cache.writeQuery({
        //   query:GET_HOME_PAGE,
        //   data: { getHomeWork: [...data] },
        // });

        // toast.success(`${addServices.memberName} add to team `);
      } catch (err) {
        console.log(err);
      }
    },
  });
