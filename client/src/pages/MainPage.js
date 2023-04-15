import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Box, useMediaQuery, Toolbar } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";
import Navbar from "components/Navbar/Navbar";
import UserWidget from "components/UserWidget/UserWidget";
import AddPostWidget from "components/AddPostWidget/AddPostWidget";
import PostList from "components/PostList/PostList";
import Advertisement from "components/Advertisement/Advertisement";
import BackToTop from "components/BackToTop/BackToTop";
import RecommendedUsers from "components/RecommendedUsers/RecommendedUsers";
import { useAuth } from "hooks/useAuth";
import { getAllPosts } from "state/posts/operations";
import { useState } from "react";
import { usePosts } from "hooks/usePosts";

export default function MainPage() {
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const dispatch = useDispatch();
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const { user } = useAuth();
  const { posts } = usePosts();

  useEffect(() => {
    const abortController = new AbortController();
    dispatch(getAllPosts({ abort: abortController.signal }));
    return () => abortController.abort();
  }, [dispatch]);

  const fetchAllPosts = async () => {
    const response = await dispatch(getAllPosts({ page: page + 1 }));

    if (response.payload.length === 0) {
      setHasMore(false);
      return;
    }

    setPage(page + 1);
  };

  return (
    <>
      <Navbar />

      <Toolbar id="back-to-top-anchor" />
      <Box
        component="main"
        width="100%"
        padding="2rem 6% 2rem"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
        alignItems="start"
        position="relative"
        overflow-y="auto"
      >
        <Box
          sx={{
            position: `${isNonMobileScreens ? "sticky" : "static"}`,
            flexBasis: `${isNonMobileScreens ? "26%" : undefined}`,
            top: "6rem",
            left: 0,
            zIndex: 1,
          }}
        >
          <UserWidget user={user} />
        </Box>
        <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
          <AddPostWidget />
          <InfiniteScroll
            dataLength={posts.length}
            next={fetchAllPosts}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
            <PostList />
          </InfiniteScroll>
        </Box>
        {isNonMobileScreens && (
          <Box
            position="sticky"
            sx={{
              flexBasis: `${isNonMobileScreens ? "26%" : undefined}`,
              top: "6rem",
              left: 0,
              zIndex: 1,
            }}
          >
            <Advertisement />
            <RecommendedUsers />
          </Box>
        )}
        <BackToTop />
      </Box>
    </>
  );
}
