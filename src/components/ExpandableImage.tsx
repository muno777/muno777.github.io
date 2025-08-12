import { createSignal, createEffect, onCleanup } from "solid-js";

export default function ExpandableImage(props: { src: string; alt?: string }) {
  const [show, setShow] = createSignal(false);    // overlay mounted
  const [active, setActive] = createSignal(false); // "open" state
  const TRANSITION_MS = 300;

  function open() {
    setShow(true);
  }

  function close() {
    setActive(false);
    setTimeout(() => setShow(false), TRANSITION_MS);
  }

  createEffect(() => {
    if (!show()) return;

    const raf1 = requestAnimationFrame(() => {
      const raf2 = requestAnimationFrame(() => setActive(true));
      onCleanup(() => cancelAnimationFrame(raf2));
    });

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);

    onCleanup(() => {
      cancelAnimationFrame(raf1);
      window.removeEventListener("keydown", onKey);
    });
  });

  return (
    <>
      {/* Thumbnail image */}
      <img
        src={props.src}
        alt={props.alt ?? ""}
        onClick={open}
        class="cursor-pointer max-w-full max-h-full block hover:scale-105 duration-200"
      />

      {show() && (
        <div
          classList={{
            "fixed inset-0 flex justify-center items-center z-[9999] transition-colors duration-300 ease-in-out bg-black/0": true,
            "bg-black/65": active(),
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
          role="dialog"
          aria-modal="true"
        >
          <img
            src={props.src}
            alt={props.alt ?? ""}
            onClick={(e) => {
              if (e.target === e.currentTarget) close();
            }}
            classList={{
              // base styles
              "max-w-[calc(100%-40px)] max-h-[calc(100%-40px)] object-contain transform scale-95 opacity-0 transition duration-300 ease-[cubic-bezier(.2,.9,.2,1)] will-change-transform will-change-opacity border-[6px] border-bymuno-grey-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)] pointer-events-auto bg-bymuno-grey-3":
                true,
              // active/open state
              "scale-100 opacity-100": active(),
            }}
          />
        </div>
      )}
    </>
  );
}
