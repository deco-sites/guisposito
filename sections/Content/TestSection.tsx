import type { ImageWidget } from "apps/admin/widgets.ts";

export interface image {
  src: ImageWidget;
  alt: string;
  width?: number;
  height?: number;
}

export interface Props {
  /**
   * @title Post body.
   * @format color
   */
  post: string;
  /**
   * @title Publish date.
   * @format datetime
   */
  datetime: string;
  /**
   * @title Post title.
   */
  title: string;
  /** @title ImagePost */
  photo?: image;
}

export default function LatestPosts({ title, photo }: Props) {
  return (
    <div>
      {photo && (
        <img
          src={photo.src}
          alt={`${photo.alt} image`}
          height={500}
          width={500}
          class="rounded"
        />
      )}
      <h1 class="font-bold">{title}</h1>
      <p>This is an example section</p>
    </div>
  );
}
