import React from "react";
import Notice from "../notice/Notice";
import Event from "../event/Event";

const NoticeEvent = () => {
  return (
    <section>
      <div className="max-w-screen-xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Notice Area */}
        <Notice />

        {/* Event Area */}
        <Event />
      </div>
    </section>
  );
};

export default NoticeEvent;
