export const refreshSession = async (supabase, dispatch, setSignOut) => {
  try {
    const { error } = await supabase.auth.refreshSession();
    if (error) throw Error();
  } catch (e) {
    dispatch(setSignOut());
    alert("로그인에 문제가 생겼습니다. 메인 화면으로 이동합니다.");
  }
};
