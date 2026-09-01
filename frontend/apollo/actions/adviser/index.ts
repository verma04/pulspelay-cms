import { useQuery, gql, useMutation, useLazyQuery } from "@apollo/react-hooks";
import { ADD_ADVISER, ADVISER_ID, EDIT_ADIVSER, GET_ALL_ADVISER } from "@apolloo/queries/adviser";


export const getAllAdviser = () => useQuery(GET_ALL_ADVISER, {});

export const getAdviserById = (options: any) => useQuery(ADVISER_ID, options);
export const useAddAdviser = () =>
    useMutation(ADD_ADVISER, {
        update(cache, { data: { addAdviser } }) {
            const { getAllAdviser }: any = cache.readQuery({
                query: GET_ALL_ADVISER,
            });

            try {
                const data = [...getAllAdviser, addAdviser];

                cache.writeQuery({
                    query: GET_ALL_ADVISER,
                    data: { getAllAdviser: [...data] },
                });
            } catch (err) {
                console.log(err);
            }
        },
    });

export const useeditAdviser = () =>
    useMutation(EDIT_ADIVSER, {
        update(cache, { data: { editAdviser } }) {
            const { getAllAdviser }: any = cache.readQuery({
                query: GET_ALL_ADVISER,
            });

            console.log(editAdviser, "ds")
            try {
                const arr = getAllAdviser;

                const objIndex = getAllAdviser.findIndex(
                    (set) => set.id === editAdviser.id
                );
                arr[objIndex] = editAdviser;

                // const {getAllAmbassadors}:any = cache.readQuery({query:GET_ALL_AMASS})

                cache.writeQuery({
                    query: GET_ALL_ADVISER,
                    data: { getAllAdviser: [...arr] },
                });
                // const data = [...getAllAdviser, addServices];

                // cache.writeQuery({
                //   query: GET_ALL_ADVISER,
                //   data: { getAllAdviser: [...data] },
                // });

                // toast.success(`${addServices.memberName} add to team `);
            } catch (err) {
                console.log(err);
            }
        },
    });
