import { useQuery, gql, useMutation, useLazyQuery } from "@apollo/react-hooks";
import {
  ADD_ROLE,
  GET_DEVICE_INFO,
  GET_USER,
  SIGN_IN,
  GET_CITIES,
  COUNTRY_CODE,
  OTP,
  GET_OS,
  GET_ARCH,
  GET_PAGES,
  CHECK_TOKEN,
  EDIT_ROLE,
  ADD_ROLE_BY_ID,
  HIRE_US,
  GET_ALL_TEAM,
  NEWS_LETTER,
  ALLIMAGES,
  GET_ONE_NEWS,
  ALL_ROLE,
  GET_NEWS_STATUS,
  PUBLISH_EDIT_NEWS,
  REMOVE_USER_SESSION,
  GET_COMMENTS,
  EDIT_TEST,
  GET_TEST_ID,
  GET_EDIT_NEWS,
  SORT_TEST,
  GET_TEST,
  ADD_TEAM_MEMBER,
  SINGLE_UPLOAD,
  EDIT_RESOURCES,
  UNKNOWN_USER,
  PDF_UPLOAD,
  SORT_TEAM_MEMBER,
  ALL_CATEGORY,
  GET_BLOG_STATUS,
  GET_ALL_TEAM_ACTIVE,
  ALL_CAREER,
  ADD_CAREER,
  ADD_SERVICES,
  ALL_SERVICES,
  ALL_SIGLE_SERVICES,
  USER_SESSION,
  EDIT_SERVICES,
  ADD_BLOG,
  ADD_NEWS,
  GET_ALL_BLOG,
  GET_ALL_NEWS,
  GET_ONE_BLOG,
  EDITOR_UPLOAD,
  GET_EDIT_BLOG,
  PUBLISH_EDIT_BLOG,
  GET_ONE_SOLUTIONS,
  GET_ALL_SOLUTIONS,
  ADD_SOLUTIONS,
  EDIT_SOLUTIONS,
  GET_ONE_TEAM,
  EDIT_TEAM_MEMBER,
  VIDEO_UPLOAD,
  ADD_CLIENT,
  GET_ALL_CLIENT,
  GET_ONE_CLIENT,
  EDIT_CLIENT,
  ADD_TAG_IAMGE,
  ALL_TAG_IAMGE,
  ALL_CAPABILITIES,
  ADD_CAPABILITIES,
  ALL_ONE_CAPABILITIES,
  EDIT_CAPABILITIES,
  ALL_ONE_IAMGE,
  EDIT_TAG_IMAGE,
  ALL_ONE_CAREER,
  UNKNOWN_USER_LOG,
  EDIT_CAREER,
  GET_CARERR_FORM,
  GET_CONTACT_FORM,
  GET_SERVICES_SEO,
  EDIT_SERVICES_SEO,
  GET_SOLUTIONS_SEO,
  EDIT_SOLUTIONS_SEO,
  SORT_CLIENTS,
  ADD_RESOURCES,
  GET_SINGLE_RESOURCES,
  GET_RESOURCES,
  SORT_RESOURCERS,
  ADD_TEST,
  SORT_SERVICES,
  GET_NOTI,
  LOGOUT_USER,
  //TOPIC
  GET_TOPIC,
  REMOVE_TOPIC,
  ADD_TOPIC,
  EDIT_TOPIC,
  GET_TYPES,
  REMOVE_TYPES,
  ADD_TYPES,
  EDIT_TYPES,
  EDIT_BLOG_TYPES,
  ADD_BLOG_TYPES,
  REMOVE_BLOG_TYPES,
  GET_BLOG_TYPE,
  GET_LIST,
  BLOG_COMMENT_STATUS,
  GET_VIEWS,
  MANAGE_SEO,
  SEND_EMAIL,
  SEO_PAGES,
  GENERATE_IMAGE,
  CHECK_GRAMMAR,
  LOGIN_FACE,
  ADD_AUTHOR,
} from "../queries/index";
import { useRouter } from "next/router";

import { ToastContainer, toast } from "react-toastify";
import SuccessToast from "@components/commanError/SuccessToast";
export const useSignIn = () =>
  useMutation(SIGN_IN, {
    update(cache, { data: { login } }) {
      return <SuccessToast data="sdd" />;
    },
  });

export const useOtpSignIn = () =>
  useMutation(OTP, {
    update(cache, { data: { confirmOtp } }) {
      const { token } = confirmOtp;
      localStorage.setItem("jwtToken", token);
    },
  });
export const checkOtpToken = (options: any) => useQuery(CHECK_TOKEN, options);
export const getAllNewsLetter = () => useQuery(NEWS_LETTER);
export const getHireUs = () => useQuery(HIRE_US);
export const getAllRole = () => useQuery(ALL_ROLE);
export const getUserSession = () => useQuery(USER_SESSION);
export const useLogout = () => useQuery(LOGOUT_USER);
export const useGetAllImages = () => useQuery(ALLIMAGES);
export const useGetAllNotifications = () => useQuery(GET_NOTI);
export const useTagImage = () => useQuery(ALL_TAG_IAMGE);
export const useDashBoardList = () => useQuery(GET_LIST);
export const useGetUser = () => useQuery(GET_USER);
export const useGetArch = () => useQuery(GET_ARCH);
export const useGetTopic = () => useQuery(GET_TOPIC);
export const useBlogCategory = () => useQuery(GET_BLOG_TYPE);
export const useGetTypes = () => useQuery(GET_TYPES);
export const useDeviceUser = () => useQuery(GET_DEVICE_INFO);
export const useGetAllTeam = () => useQuery(GET_ALL_TEAM);
export const useGetAllActiveTeam = () => useQuery(GET_ALL_TEAM_ACTIVE);
export const useGetAllCarrer = () => useQuery(ALL_CAREER);
export const useGetAllCategory = () => useQuery(ALL_CATEGORY);
export const useGetAllServices = () => useQuery(ALL_SERVICES);
export const useGetAllSolutions = () => useQuery(GET_ALL_SOLUTIONS);
export const useGetAllBlog = () => useQuery(GET_ALL_BLOG);
export const useGetAllNews = () => useQuery(GET_ALL_NEWS);
export const usegetAllTagImageAdmin = () => useQuery(ALL_TAG_IAMGE);
export const useGetAllTest = () => useQuery(GET_TEST);
export const useGetAllContactForm = () => useQuery(GET_CONTACT_FORM);
export const useAllCapabilities = () => useQuery(ALL_CAPABILITIES);
export const useGetSingleServices = (options: any) =>
  useQuery(ALL_SIGLE_SERVICES, options);
export const useGetOneTeam = (options: any) => useQuery(GET_ONE_TEAM, options);
export const useGetAllClient = () => useQuery(GET_ALL_CLIENT);
export const useGetSingleSolutions = (options: any) =>
  useQuery(GET_ONE_SOLUTIONS, options);
export const useGetOneImage = (options: any) =>
  useQuery(ALL_ONE_IAMGE, options);

export const getViews = (options: any) => useQuery(GET_VIEWS, options);
export const getCities = (options: any) => useQuery(GET_CITIES, options);
export const getOs = (options: any) => useQuery(GET_OS, options);
export const getPages = (options: any) => useQuery(GET_PAGES, options);
export const getCountryCode = (options: any) => useQuery(COUNTRY_CODE, options);
export const useGetAllCarerForm = () => useQuery(GET_CARERR_FORM);

// Resources
export const useGetOneResources = (options: any) =>
  useQuery(GET_SINGLE_RESOURCES, options);

export const useGetAllResources = () => useQuery(GET_RESOURCES);
export const useGetSingleCapabilities = (options: any) =>
  useQuery(ALL_ONE_CAPABILITIES, options);
export const getRoleById = (options: any) => useQuery(ADD_ROLE_BY_ID, options);

export const useGetComments = (options: any) => useQuery(GET_COMMENTS, options);
export const usegetUserLog = (options: any) =>
  useQuery(UNKNOWN_USER_LOG, options);

export const usegetTest = (options: any) => useQuery(GET_TEST_ID, options);
export const useGetSingleBlog = (options: any) =>
  useQuery(GET_ONE_BLOG, options);
export const useGetSingleNews = (options: any) =>
  useQuery(GET_ONE_NEWS, options);
export const useGetOneClient = (options: any) =>
  useQuery(GET_ONE_CLIENT, options);
export const useGetOneCarrer = (options: any) =>
  useQuery(ALL_ONE_CAREER, options);
export const useAddMember = () =>
  useMutation(ADD_TEAM_MEMBER, {
    update(cache, { data: { addTeamMember } }) {
      const { getAllTeamMember }: any = cache.readQuery({
        query: GET_ALL_TEAM,
      });

      if (getAllTeamMember) {
        try {
          const data = [...getAllTeamMember, addTeamMember];

          cache.writeQuery({
            query: GET_ALL_TEAM,
            data: { getAllTeamMember: [...data] },
          });

          toast.success(`${addTeamMember.memberName} add to team `);
        } catch (err) {
          console.log(err);
        }
      }
    },
  });

export const useBlogComments = () =>
  useMutation(BLOG_COMMENT_STATUS, {
    update(cache, { data: { addBlogCommentsStatus } }) {
      try {
        cache.writeQuery({
          query: GET_COMMENTS,
          data: { getBlogComment: [...addBlogCommentsStatus] },
          variables: {
            id: addBlogCommentsStatus[0].id,
          },
        });

        toast.success(`Update Success`);
      } catch (err) {
        console.log(err);
      }
    },
  });
export const useAddTopic = () =>
  useMutation(ADD_TOPIC, {
    update(cache, { data: { addResourcesTopic } }) {
      const { getResourcesTopic }: any = cache.readQuery({
        query: GET_TOPIC,
      });

      try {
        const data = [...getResourcesTopic, addResourcesTopic];

        cache.writeQuery({
          query: GET_TOPIC,
          data: { getResourcesTopic: [...data] },
        });

        toast.success(`Add Success`);
      } catch (err) {
        console.log(err);
      }
    },
  });
export const useAddRole = () =>
  useMutation(ADD_ROLE, {
    update(cache, { data: { addRole } }) {
      const { getAllRole }: any = cache.readQuery({
        query: ALL_ROLE,
      });

      try {
        const data = [...getAllRole, addRole];

        cache.writeQuery({
          query: ALL_ROLE,
          data: { getAllRole: [...data] },
        });

        toast.success(`Add Success`);
      } catch (err) {
        console.log(err);
      }
    },
  });
export const useAddTypes = () =>
  useMutation(ADD_TYPES, {
    update(cache, { data: { addResourcesTypes } }) {
      const { getResourcesTypes }: any = cache.readQuery({
        query: GET_TYPES,
      });

      try {
        const data = [...getResourcesTypes, addResourcesTypes];

        cache.writeQuery({
          query: GET_TYPES,
          data: { getResourcesTypes: [...data] },
        });

        toast.success(`Add Success`);
      } catch (err) {
        console.log(err);
      }
    },
  });
export const useAddBlogCategory = () =>
  useMutation(ADD_BLOG_TYPES, {
    update(cache, { data: { addBlogCategory } }) {
      const { getAllBlogCategory }: any = cache.readQuery({
        query: GET_BLOG_TYPE,
      });

      try {
        const data = [...getAllBlogCategory, addBlogCategory];

        cache.writeQuery({
          query: GET_BLOG_TYPE,
          data: { getAllBlogCategory: [...data] },
        });

        toast.success(`Add Success`);
      } catch (err) {
        console.log(err);
      }
    },
  });
export const useAdcapabilities = () =>
  useMutation(ADD_CAPABILITIES, {
    update(cache, { data: { addCapabilities } }) {
      const { getAllCapabilities }: any = cache.readQuery({
        query: ALL_CAPABILITIES,
      });

      try {
        const data = [...getAllCapabilities, addCapabilities];

        cache.writeQuery({
          query: ALL_CAPABILITIES,
          data: { getAllCapabilities: [...data] },
        });

        toast.success(`${addCapabilities.capabilitiesTitle} add to team `);
      } catch (err) {
        console.log(err);
      }
    },
  });
export const useAddTest = () =>
  useMutation(ADD_TEST, {
    update(cache, { data: { addTestimonial } }) {
      const { getTestimonial }: any = cache.readQuery({
        query: GET_TEST,
      });

      try {
        const data = [...getTestimonial, addTestimonial];

        cache.writeQuery({
          query: GET_TEST,
          data: { getTestimonial: [...data] },
        });
      } catch (err) {
        console.log(err);
      }
    },
  });

export const useAddCareer = () =>
  useMutation(ADD_CAREER, {
    update(cache, { data: { addCarrer } }) {
      const { getAllCarrer }: any = cache.readQuery({
        query: ALL_CAREER,
      });

      try {
        const data = [...getAllCarrer, addCarrer];

        cache.writeQuery({
          query: ALL_CAREER,
          data: { getAllCarrer: [...data] },
        });

        toast.success(`${addCarrer.memberName} add to team `);
      } catch (err) {
        console.log(err);
      }
    },
  });

export const useAddServices = () =>
  useMutation(ADD_SERVICES, {
    update(cache, { data: { addServices } }) {
      const { getAllServices }: any = cache.readQuery({
        query: ALL_SERVICES,
      });

      try {
        const data = [...getAllServices, addServices];

        cache.writeQuery({
          query: ALL_SERVICES,
          data: { getAllServices: [...data] },
        });

        toast.success(`${addServices.servicesName} add to services `);
      } catch (err) {
        console.log(err);
      }
    },
  });

export const useAddSolutions = () =>
  useMutation(ADD_SOLUTIONS, {
    update(cache, { data: { addSolutions } }) {
      const { getAllSolutions }: any = cache.readQuery({
        query: GET_ALL_SOLUTIONS,
      });

      try {
        if (getAllSolutions) {
          const data = [...getAllSolutions, addSolutions];

          cache.writeQuery({
            query: GET_ALL_SOLUTIONS,
            data: { getAllSolutions: [...data] },
          });
        }
        // toast.success(`${addSolutions.memberName} add to team `);
      } catch (err) {
        console.log(err);
      }
    },
  });
export const useAddResources = () =>
  useMutation(ADD_RESOURCES, {
    update(cache, { data: { addResources } }) {
      const { getAllResources }: any = cache.readQuery({
        query: GET_RESOURCES,
      });

      try {
        const data = [...getAllResources, addResources];

        cache.writeQuery({
          query: GET_RESOURCES,
          data: { getAllResources: [...data] },
        });

        // toast.success(`${addSolutions.memberName} add to team `);
      } catch (err) {
        console.log(err);
      }
    },
  });

export const useEditServices = () =>
  useMutation(EDIT_SERVICES, {
    update(cache, { data: { editServices } }) {
      const { getAllServices }: any = cache.readQuery({
        query: ALL_SERVICES,
      });

      try {
        const arr = getAllServices;

        const objIndex = getAllServices.findIndex(
          (set) => set.id === editServices.id
        );
        arr[objIndex] = editServices;

        // const {getAllAmbassadors}:any = cache.readQuery({query:GET_ALL_AMASS})

        cache.writeQuery({
          query: ALL_SERVICES,
          data: { getAllServicesl: [...arr] },
        });
        // const data = [...getAllServices, addServices];

        // cache.writeQuery({
        //   query: ALL_SERVICES,
        //   data: { getAllServices: [...data] },
        // });

        // toast.success(`${addServices.memberName} add to team `);
      } catch (err) {
        console.log(err);
      }
    },
  });

export const useEditRole = () =>
  useMutation(EDIT_ROLE, {
    update(cache, { data: { editRole } }) {
      const { getAllRole }: any = cache.readQuery({
        query: ALL_ROLE,
      });

      try {
        const arr = getAllRole;

        const objIndex = getAllRole.findIndex((set) => set.id === editRole.id);
        arr[objIndex] = editRole;

        // const {getAllAmbassadors}:any = cache.readQuery({query:GET_ALL_AMASS})

        cache.writeQuery({
          query: ALL_ROLE,
          data: { getAllRole: [...arr] },
        });
        // const data = [...getAllServices, addServices];

        // cache.writeQuery({
        //   query: ALL_SERVICES,
        //   data: { getAllServices: [...data] },
        // });

        // toast.success(`${addServices.memberName} add to team `);

        // console.log(editRole.id);
        // cache.writeQuery({
        //   query: ADD_ROLE_BY_ID,
        //   data: { getRoleById: editRole },
        //   variables: {
        //     // Provide any required variables here
        //     id: editRole.id,
        //   },
        // });
      } catch (err) {
        console.log(err);
      }
    },
  });
export const useEditTopic = () =>
  useMutation(EDIT_TOPIC, {
    update(cache, { data: { editResourcesTopic } }) {
      const { getResourcesTopic }: any = cache.readQuery({
        query: GET_TOPIC,
      });

      try {
        const arr = getResourcesTopic;

        const objIndex = getResourcesTopic.findIndex(
          (set) => set.id === editResourcesTopic.id
        );
        arr[objIndex] = editResourcesTopic;

        // const {getAllAmbassadors}:any = cache.readQuery({query:GET_ALL_AMASS})
        toast.success("Edit Success");
        cache.writeQuery({
          query: GET_TOPIC,
          data: { getResourcesTopic: [...arr] },
        });
        // const data = [...getAllServices, addServices];

        // cache.writeQuery({
        //   query: ALL_SERVICES,
        //   data: { getAllServices: [...data] },
        // });

        // toast.success(`${addServices.memberName} add to team `);
      } catch (err) {
        console.log(err);
      }
    },
  });
export const useEditTypes = () =>
  useMutation(EDIT_TYPES, {
    update(cache, { data: { editResourcesTypes } }) {
      const { getResourcesTypes }: any = cache.readQuery({
        query: GET_TYPES,
      });

      try {
        const arr = getResourcesTypes;

        const objIndex = getResourcesTypes.findIndex(
          (set) => set.id === editResourcesTypes.id
        );
        arr[objIndex] = editResourcesTypes;

        // const {getAllAmbassadors}:any = cache.readQuery({query:GET_ALL_AMASS})
        toast.success("Edit Success");
        cache.writeQuery({
          query: GET_TYPES,
          data: { getResourcesTypes: [...arr] },
        });
        // const data = [...getAllServices, addServices];

        // cache.writeQuery({
        //   query: ALL_SERVICES,
        //   data: { getAllServices: [...data] },
        // });

        // toast.success(`${addServices.memberName} add to team `);
      } catch (err) {
        console.log(err);
      }
    },
  });
export const useEditBlogCategory = () =>
  useMutation(EDIT_BLOG_TYPES, {
    update(cache, { data: { editBlogCategory } }) {
      const { getAllBlogCategory }: any = cache.readQuery({
        query: GET_BLOG_TYPE,
      });

      try {
        const arr = getAllBlogCategory;

        const objIndex = getAllBlogCategory?.findIndex(
          (set) => set.id === editBlogCategory.id
        );
        arr[objIndex] = editBlogCategory;

        // const {getAllAmbassadors}:any = cache.readQuery({query:GET_ALL_AMASS})
        toast.success("Edit Success");
        cache.writeQuery({
          query: GET_BLOG_TYPE,
          data: { getAllBlogCategory: [...arr] },
        });
        // const data = [...getAllServices, addServices];

        // cache.writeQuery({
        //   query: ALL_SERVICES,
        //   data: { getAllServices: [...data] },
        // });

        // toast.success(`${addServices.memberName} add to team `);
      } catch (err) {
        console.log(err);
      }
    },
  });
export const useRemoveTopic = () =>
  useMutation(REMOVE_TOPIC, {
    update(cache, { data: { removeResourcesTopic } }) {
      const { getResourcesTopic }: any = cache.readQuery({
        query: GET_TOPIC,
      });

      try {
        const arr = getResourcesTopic;

        const objIndex = getResourcesTopic.filter(
          (set) => set.id !== removeResourcesTopic.id
        );

        // const {getAllAmbassadors}:any = cache.readQuery({query:GET_ALL_AMASS})

        cache.writeQuery({
          query: GET_TOPIC,
          data: { getResourcesTopic: objIndex },
        });
        // const data = [...getAllServices, addServices];

        // cache.writeQuery({
        //   query: ALL_SERVICES,
        //   data: { getAllServices: [...data] },
        // });

        // toast.success(`${addServices.memberName} add to team `);
      } catch (err) {
        console.log(err);
      }
    },
  });
export const useRemoveUserSession = () =>
  useMutation(REMOVE_USER_SESSION, {
    update(cache, { data: { forceUserLogout } }) {
      const { getUserSession }: any = cache.readQuery({
        query: USER_SESSION,
      });

      try {
        const arr = getUserSession;

        const objIndex = getUserSession.filter(
          (set) => set.id !== forceUserLogout.id
        );

        // const {getAllAmbassadors}:any = cache.readQuery({query:GET_ALL_AMASS})

        window.location.reload();
        cache.writeQuery({
          query: USER_SESSION,
          data: { getUserSession: objIndex },
        });
        // const data = [...getAllServices, addServices];

        // cache.writeQuery({
        //   query: ALL_SERVICES,
        //   data: { getAllServices: [...data] },
        // });

        // toast.success(`${addServices.memberName} add to team `);
      } catch (err) {
        console.log(err);
      }
    },
  });
export const useRemoveTypes = () =>
  useMutation(REMOVE_TYPES, {
    update(cache, { data: { removeResourcesTypes } }) {
      const { getResourcesTypes }: any = cache.readQuery({
        query: GET_TYPES,
      });

      try {
        const arr = getResourcesTypes;

        const objIndex = getResourcesTypes.filter(
          (set) => set.id !== removeResourcesTypes.id
        );

        // const {getAllAmbassadors}:any = cache.readQuery({query:GET_ALL_AMASS})

        cache.writeQuery({
          query: GET_TYPES,
          data: { getResourcesTypes: objIndex },
        });
        // const data = [...getAllServices, addServices];

        // cache.writeQuery({
        //   query: ALL_SERVICES,
        //   data: { getAllServices: [...data] },
        // });

        toast.success(`Removed `);
      } catch (err) {
        console.log(err);
      }
    },
  });
export const useRemoveBlogCategory = () =>
  useMutation(REMOVE_BLOG_TYPES, {
    update(cache, { data: { removeBlogCategory } }) {
      const { getAllBlogCategory }: any = cache.readQuery({
        query: GET_BLOG_TYPE,
      });

      try {
        const arr = getAllBlogCategory;

        const objIndex = getAllBlogCategory.filter(
          (set) => set.id !== removeBlogCategory.id
        );

        // const {getAllAmbassadors}:any = cache.readQuery({query:GET_ALL_AMASS})

        cache.writeQuery({
          query: GET_BLOG_TYPE,
          data: { getAllBlogCategory: objIndex },
        });
        // const data = [...getAllServices, addServices];

        // cache.writeQuery({
        //   query: ALL_SERVICES,
        //   data: { getAllServices: [...data] },
        // });

        toast.success(`Removed`);
      } catch (err) {
        console.log(err);
      }
    },
  });
export const useEditResources = () =>
  useMutation(EDIT_RESOURCES, {
    update(cache, { data: { editResources } }) {
      const { getAllResources }: any = cache.readQuery({
        query: GET_RESOURCES,
      });

      try {
        const arr = getAllResources;

        const objIndex = getAllResources.findIndex(
          (set) => set.id === editResources.id
        );
        arr[objIndex] = editResources;

        // const {getAllAmbassadors}:any = cache.readQuery({query:GET_ALL_AMASS})

        cache.writeQuery({
          query: GET_RESOURCES,
          data: { getAllResources: [...arr] },
        });
        // const data = [...getAllServices, addServices];

        // cache.writeQuery({
        //   query: ALL_SERVICES,
        //   data: { getAllServices: [...data] },
        // });

        // toast.success(`${addServices.memberName} add to team `);
      } catch (err) {
        console.log(err);
      }
    },
  });
export const useEditTest = () =>
  useMutation(EDIT_TEST, {
    update(cache, { data: { editTestimonial } }) {
      const { getTestimonial }: any = cache.readQuery({
        query: GET_TEST,
      });

      try {
        const arr = getTestimonial;

        const objIndex = getTestimonial.findIndex(
          (set) => set.id === editTestimonial.id
        );
        arr[objIndex] = editTestimonial;

        // const {getAllAmbassadors}:any = cache.readQuery({query:GET_ALL_AMASS})

        cache.writeQuery({
          query: GET_TEST,
          data: { getAllResources: [...arr] },
        });
        // const data = [...getAllServices, addServices];

        // cache.writeQuery({
        //   query: ALL_SERVICES,
        //   data: { getAllServices: [...data] },
        // });

        // toast.success(`${addServices.memberName} add to team `);
      } catch (err) {
        console.log(err);
      }
    },
  });

export const useEditSolutions = () =>
  useMutation(EDIT_SOLUTIONS, {
    update(cache, { data: { editSolutions } }) {
      const { getAllSolutions }: any = cache.readQuery({
        query: GET_ALL_SOLUTIONS,
      });

      try {
        if (getAllSolutions) {
          const arr = getAllSolutions;

          const objIndex = getAllSolutions.findIndex(
            (set) => set.id === editSolutions.id
          );
          arr[objIndex] = editSolutions;

          // const {getAllAmbassadors}:any = cache.readQuery({query:GET_ALL_AMASS})

          cache.writeQuery({
            query: GET_ALL_SOLUTIONS,
            data: { getAllSolutions: [...arr] },
          });
        }
        // const data = [...getAllServices, addServices];

        // cache.writeQuery({
        //   query: ALL_SERVICES,
        //   data: { getAllServices: [...data] },
        // });

        // toast.success(`${addServices.memberName} add to team `);
      } catch (err) {
        console.log(err);
      }
    },
  });

export const useEditCareer = () =>
  useMutation(EDIT_CAREER, {
    update(cache, { data: { editCarrer } }) {
      const { getAllCarrer }: any = cache.readQuery({
        query: ALL_CAREER,
      });

      try {
        const arr = getAllCarrer;

        const objIndex = getAllCarrer.findIndex(
          (set) => set.id === editCarrer.id
        );
        arr[objIndex] = editCarrer;

        // const {getAllAmbassadors}:any = cache.readQuery({query:GET_ALL_AMASS})

        cache.writeQuery({
          query: ALL_CAREER,
          data: { getAllCarrer: [...arr] },
        });
        // const data = [...getAllServices, addServices];

        // cache.writeQuery({
        //   query: ALL_SERVICES,
        //   data: { getAllServices: [...data] },
        // });

        // toast.success(`${addServices.memberName} add to team `);
      } catch (err) {
        console.log(err);
      }
    },
  });

export const useEditTagImage = () =>
  useMutation(EDIT_TAG_IMAGE, {
    update(cache, { data: { editTagedImages } }) {
      const { getAllTagImageAdmin }: any = cache.readQuery({
        query: ALL_TAG_IAMGE,
      });

      try {
        const arr = getAllTagImageAdmin;

        const objIndex = getAllTagImageAdmin.findIndex(
          (set) => set.id === editTagedImages.id
        );
        arr[objIndex] = editTagedImages;

        // const {getAllAmbassadors}:any = cache.readQuery({query:GET_ALL_AMASS})

        cache.writeQuery({
          query: ALL_TAG_IAMGE,
          data: { getAllTagImageAdmin: [...arr] },
        });
        // const data = [...getAllServices, addServices];

        // cache.writeQuery({
        //   query: ALL_SERVICES,
        //   data: { getAllServices: [...data] },
        // });

        // toast.success(`${addServices.memberName} add to team `);
      } catch (err) {
        console.log(err);
      }
    },
  });

export const useEditcapabilities = () =>
  useMutation(EDIT_CAPABILITIES, {
    update(cache, { data: { editCapabilities } }) {
      const { getAllCapabilities }: any = cache.readQuery({
        query: ALL_CAPABILITIES,
      });

      try {
        const arr = getAllCapabilities;

        const objIndex = getAllCapabilities.findIndex(
          (set) => set.id === editCapabilities.id
        );
        arr[objIndex] = editCapabilities;

        // const {getAllAmbassadors}:any = cache.readQuery({query:GET_ALL_AMASS})

        cache.writeQuery({
          query: ALL_CAPABILITIES,
          data: { getAllCapabilities: [...arr] },
        });
        // const data = [...getAllServices, addServices];

        // cache.writeQuery({
        //   query: ALL_SERVICES,
        //   data: { getAllServices: [...data] },
        // });

        // toast.success(`${addServices.memberName} add to team `);
      } catch (err) {
        console.log(err);
      }
    },
  });

export const useEditMember = () =>
  useMutation(EDIT_TEAM_MEMBER, {
    update(cache, { data: { editTeamMember } }) {
      const { getAllTeamMember }: any = cache.readQuery({
        query: GET_ALL_TEAM,
      });

      try {
        const arr = getAllTeamMember;

        const objIndex = getAllTeamMember.findIndex(
          (set) => set.id === editTeamMember.id
        );
        arr[objIndex] = editTeamMember;

        // const {getAllAmbassadors}:any = cache.readQuery({query:GET_ALL_AMASS})

        cache.writeQuery({
          query: GET_ALL_TEAM,
          data: { getAllTeamMember: [...arr] },
        });
        // const data = [...getAllServices, addServices];

        // cache.writeQuery({
        //   query: ALL_SERVICES,
        //   data: { getAllServices: [...data] },
        // });

        // toast.success(`${addServices.memberName} add to team `);
      } catch (err) {
        console.log(err);
      }
    },
  });

export const useSortMember = () =>
  useMutation(SORT_TEAM_MEMBER, {
    update(cache, { data: { sortTeamMember } }) {
      const { getAllTeamMember }: any = cache.readQuery({
        query: GET_ALL_TEAM,
      });

      try {
        // const {getAllAmbassadors}:any = cache.readQuery({query:GET_ALL_AMASS})
        cache.writeQuery({
          query: GET_ALL_TEAM,
          data: { getAllTeamMember: sortTeamMember },
        });
        // const data = [...getAllServices, addServices];
        // cache.writeQuery({
        //   query: ALL_SERVICES,
        //   data: { getAllServices: [...data] },
        // });
        // toast.success(`${addServices.memberName} add to team `);
      } catch (err) {
        console.log(err);
      }
    },
  });

export const useSortTest = () =>
  useMutation(SORT_TEST, {
    update(cache, { data: { sortTestimonial } }) {
      const { getAllTeamMember }: any = cache.readQuery({
        query: GET_TEST,
      });

      try {
        // const {getAllAmbassadors}:any = cache.readQuery({query:GET_ALL_AMASS})
        cache.writeQuery({
          query: GET_TEST,
          data: { getTestimonial: sortTestimonial },
        });
        // const data = [...getAllServices, addServices];
        // cache.writeQuery({
        //   query: ALL_SERVICES,
        //   data: { getAllServices: [...data] },
        // });
        // toast.success(`${addServices.memberName} add to team `);
      } catch (err) {
        console.log(err);
      }
    },
  });

export const useSortServices = () => useMutation(SORT_SERVICES, {});
export const useSortResources = () =>
  useMutation(SORT_TEAM_MEMBER, {
    update(cache, { data: { sortResources } }) {
      const { getAllResources }: any = cache.readQuery({
        query: GET_RESOURCES,
      });

      try {
        // const {getAllAmbassadors}:any = cache.readQuery({query:GET_ALL_AMASS})
        cache.writeQuery({
          query: GET_RESOURCES,
          data: { getAllResources: sortResources },
        });
        // const data = [...getAllServices, addServices];
        // cache.writeQuery({
        //   query: ALL_SERVICES,
        //   data: { getAllServices: [...data] },
        // });
        // toast.success(`${addServices.memberName} add to team `);
      } catch (err) {
        console.log(err);
      }
    },
  });

export const useSortClients = () =>
  useMutation(SORT_CLIENTS, {
    update(cache, { data: { sortClients } }) {
      const { getAllClients }: any = cache.readQuery({
        query: GET_ALL_CLIENT,
      });

      try {
        // const {getAllAmbassadors}:any = cache.readQuery({query:GET_ALL_AMASS})
        cache.writeQuery({
          query: GET_ALL_CLIENT,
          data: { getAllClients: sortClients },
        });
        // const data = [...getAllServices, addServices];
        // cache.writeQuery({
        //   query: ALL_SERVICES,
        //   data: { getAllServices: [...data] },
        // });
        // toast.success(`${addServices.memberName} add to team `);
      } catch (err) {
        console.log(err);
      }
    },
  });
export const useUploadImage = () =>
  useMutation(SINGLE_UPLOAD, {
    update(cache, { data: { singleUpload } }) {
      const { getAllImages }: any = cache.readQuery({
        query: ALLIMAGES,
      });

      try {
        const data = [singleUpload, ...getAllImages];

        cache.writeQuery({
          query: ALLIMAGES,
          data: { getAllImages: [...data] },
        });
      } catch (err) {
        console.log(err);
      }
    },
  });
export const useFaceLogin = () => useMutation(LOGIN_FACE, {});
export const usePdfUpload = () => useMutation(PDF_UPLOAD, {});
export const useUploadVedio = () => useMutation(VIDEO_UPLOAD, {});

export const useEditorImage = () => useMutation(EDITOR_UPLOAD, {});

export const useAddNews = () => useMutation(ADD_NEWS, {});
export const useAddBlog = () => useMutation(ADD_BLOG, {});
export const useEditBlog = () =>
  useMutation(GET_EDIT_BLOG, {
    update(cache, { data: { publishBlog } }) {
      const { getAllBlog }: any = cache.readQuery({
        query: GET_ALL_BLOG,
      });

      try {
        if (getAllBlog) {
          const arr = getAllBlog;
          const objIndex = getAllBlog.findIndex(
            (set) => set.id === publishBlog.id
          );
          arr[objIndex] = publishBlog;
          console.log(arr, "sd");
          cache.writeQuery({
            query: GET_ALL_BLOG,
            data: {
              getAllBlog: [...arr],
            },
          });
        }
      } catch (err) {
        console.log(err);
      }
    },
  });
export const useEditNews = () => useMutation(GET_EDIT_NEWS, {});
export const useSetBlogStatus = () =>
  useMutation(GET_BLOG_STATUS, {
    update(cache, { data: { setBlogStatus } }) {
      const { getAllBlog }: any = cache.readQuery({
        query: GET_ALL_BLOG,
      });
      window.location.reload();

      try {
        if (getAllBlog) {
          const arr = getAllBlog;
          const objIndex = getAllBlog.findIndex(
            (set) => set.id === setBlogStatus.id
          );
          arr[objIndex] = setBlogStatus;

          cache.writeQuery({
            query: GET_ALL_BLOG,
            data: {
              getAllBlog: [...arr],
            },
          });
        }
      } catch (err) {
        console.log(err);
      }
    },
  });

export const useAddAuthor = () =>
  useMutation(ADD_AUTHOR, {
    update(cache, { data: { addBlogManger } }) {
      const { getAllBlog }: any = cache.readQuery({
        query: GET_ALL_BLOG,
      });

      try {
        window.location.reload();
      } catch (err) {
        console.log(err);
      }
    },
  });
export const useSetNewsStatus = () =>
  useMutation(GET_NEWS_STATUS, {
    update(cache, { data: { setNewsStatus } }) {
      const { getAllNews }: any = cache.readQuery({
        query: GET_ALL_NEWS,
      });
      window.location.reload();

      try {
        const arr = getAllNews;
        const objIndex = getAllNews.findIndex(
          (set) => set.id === setNewsStatus.id
        );
        arr[objIndex] = setNewsStatus;

        cache.writeQuery({
          query: GET_ALL_NEWS,
          data: {
            getAllNews: [...arr],
          },
        });
      } catch (err) {
        console.log(err);
      }
    },
  });

export const usePublishBlog = () =>
  useMutation(PUBLISH_EDIT_BLOG, {
    update(cache, { data: { publishBlog } }) {
      const { getAllBlog }: any = cache.readQuery({
        query: GET_ALL_BLOG,
      });

      try {
        if (getAllBlog) {
          const arr = getAllBlog;
          const objIndex = getAllBlog.findIndex(
            (set) => set.id === publishBlog.id
          );
          arr[objIndex] = publishBlog;

          console.log(arr, "sd");
          cache.writeQuery({
            query: GET_ALL_BLOG,
            data: {
              getAllBlog: [...arr],
            },
          });
        }
      } catch (err) {
        console.log(err);
      }
    },
  });

export const usePublishNews = () =>
  useMutation(PUBLISH_EDIT_NEWS, {
    update(cache, { data: { publishNews } }) {
      const { getAllNews }: any = cache.readQuery({
        query: GET_ALL_NEWS,
      });

      try {
        const data = [publishNews, ...getAllNews];

        cache.writeQuery({
          query: GET_ALL_NEWS,
          data: { getAllNews: [...data] },
        });
      } catch (err) {
        console.log(err);
      }
    },
  });
export const useAddClient = () =>
  useMutation(ADD_CLIENT, {
    update(cache, { data: { addClient } }) {
      const { getAllClients }: any = cache.readQuery({
        query: GET_ALL_CLIENT,
      });

      try {
        const data = [addClient, ...getAllClients];

        cache.writeQuery({
          query: GET_ALL_CLIENT,
          data: { getAllClients: [...data] },
        });
      } catch (err) {
        console.log(err);
      }
    },
  });

export const useEditClient = () =>
  useMutation(EDIT_CLIENT, {
    update(cache, { data: { editClient } }) {
      const { getAllClients }: any = cache.readQuery({
        query: GET_ALL_CLIENT,
      });

      try {
        const arr = getAllClients;
        const objIndex = getAllClients.findIndex(
          (set) => set.id === editClient.id
        );
        arr[objIndex] = editClient;

        cache.writeQuery({
          query: GET_ALL_CLIENT,
          data: { getAllClients: [...arr] },
        });
      } catch (err) {
        console.log(err);
      }
    },
  });

export const useAddTagImage = () =>
  useMutation(ADD_TAG_IAMGE, {
    update(cache, { data: { addTagedImages } }) {
      console.log(addTagedImages);
      const { getAllTagImageAdmin }: any = cache.readQuery({
        query: ALL_TAG_IAMGE,
      });

      try {
        const data = [addTagedImages, ...getAllTagImageAdmin];

        cache.writeQuery({
          query: ALL_TAG_IAMGE,
          data: { getAllTagImageAdmin: [...data] },
        });
      } catch (err) {
        console.log(err);
      }
    },
  });

//SEO

export const useServiceSeo = (options: any) =>
  useQuery(GET_SERVICES_SEO, options);
export const useServiceEditSeo = () =>
  useMutation(EDIT_SERVICES_SEO, {
    update(cache, { data: { editServicesSeo } }) {
      console.log(editServicesSeo);

      cache.writeQuery({
        query: GET_SERVICES_SEO,
        data: { getServicesSeo: editServicesSeo },
        variables: {
          // Provide any required variables here
          id: editServicesSeo.id,
        },
      });
      // const { getAllTagImageAdmin }: any = cache.readQuery({
      //   query: ALL_TAG_IAMGE,
      // });

      // try {
      //   const data = [addTagedImages, ...getAllTagImageAdmin];

      //   cache.writeQuery({
      //     query: ALL_TAG_IAMGE,
      //     data: { getAllTagImageAdmin: [...data] },
      //   });
      // } catch (err) {
      //   console.log(err);
      // }
    },
  });

export const useSolutionSeo = (options: any) =>
  useQuery(GET_SOLUTIONS_SEO, options);
export const useGetKnownUser = () => useQuery(UNKNOWN_USER);
export const useSolutionEditSeo = () =>
  useMutation(EDIT_SOLUTIONS_SEO, {
    update(cache, { data: { editSolutionsSeo } }) {
      console.log(editSolutionsSeo);

      cache.writeQuery({
        query: GET_SOLUTIONS_SEO,
        data: { getSolutionsSeo: editSolutionsSeo },
        variables: {
          // Provide any required variables here
          id: editSolutionsSeo.id,
        },
      });
      // const { getAllTagImageAdmin }: any = cache.readQuery({
      //   query: ALL_TAG_IAMGE,
      // });

      // try {
      //   const data = [addTagedImages, ...getAllTagImageAdmin];

      //   cache.writeQuery({
      //     query: ALL_TAG_IAMGE,
      //     data: { getAllTagImageAdmin: [...data] },
      //   });
      // } catch (err) {
      //   console.log(err);
      // }
    },
  });

export const useManageSeo = () =>
  useMutation(MANAGE_SEO, {
    update(cache, { data: { manageSeo } }) {
      window.location.reload();
    },
  });

export const useSendEmail = () =>
  useMutation(SEND_EMAIL, {
    update(cache, { data: { sendEmail } }) {},
  });

export const useSeoPages = (options: any) => useQuery(SEO_PAGES, options);

export const useGenerateImage = () => useMutation(GENERATE_IMAGE, {});

export const useCheckGrammar = () => useMutation(CHECK_GRAMMAR, {});
