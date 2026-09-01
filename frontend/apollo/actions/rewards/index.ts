import { useQuery, gql, useMutation, useLazyQuery } from "@apollo/react-hooks";
import {
    ADD_REWARDS,
    AWARD_ID,
    EDIT_AWARD,
    GET_ALL_AWARDS,
} from "@apolloo/queries/awards";

export const GetAllAwards = () => useQuery(GET_ALL_AWARDS, {});

export const GetAwardsById = (options: any) => useQuery(AWARD_ID, options);
export const useAddAwards = () =>
    useMutation(ADD_REWARDS, {
        update(cache, { data: { addAwards } }) {
            const { getAllAwards }: any = cache.readQuery({
                query: GET_ALL_AWARDS,
            });

            try {
                const data = [...getAllAwards, addAwards];

                cache.writeQuery({
                    query: GET_ALL_AWARDS,
                    data: { getAllAwards: [...data] },
                });
            } catch (err) {
                console.log(err);
            }
        },
    });

export const useEditAwards = () =>
    useMutation(EDIT_AWARD, {
        update(cache, { data: { editAwards } }) {
            const { getAllAwards }: any = cache.readQuery({
                query: GET_ALL_AWARDS,
            });

            try {
                const arr = getAllAwards;

                const objIndex = getAllAwards.findIndex(
                    (set) => set.id === editAwards.id
                );
                arr[objIndex] = editAwards;

                // const {getAllAmbassadors}:any = cache.readQuery({query:GET_ALL_AMASS})

                cache.writeQuery({
                    query: GET_ALL_AWARDS,
                    data: { getAllAwards: [...arr] },
                });
                // const data = [...getAllAwards, addServices];

                // cache.writeQuery({
                //   query: GET_ALL_AWARDS,
                //   data: { getAllAwards: [...data] },
                // });

                // toast.success(`${addServices.memberName} add to team `);
            } catch (err) {
                console.log(err);
            }
        },
    });
