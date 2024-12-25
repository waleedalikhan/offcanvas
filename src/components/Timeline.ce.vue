<script setup lang="ts"></script>

<template>
  <ol class="timeline">
    <li class="timeline-item">
      <span class="timeline-item-icon | avatar-icon">
        <i class="avatar">
          <img src="https://assets.codepen.io/285131/hat-man.png" />
        </i>
      </span>
      <div class="new-comment">
        <input type="text" placeholder="Add a comment..." />
      </div>
    </li>
    <li class="timeline-item">
      <span class="timeline-item-icon | faded-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            fill="currentColor"
            d="M12.9 6.858l4.242 4.243L7.242 21H3v-4.243l9.9-9.9zm1.414-1.414l2.121-2.122a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414l-2.122 2.121-4.242-4.242z"
          />
        </svg>
      </span>
      <div class="timeline-item-description">
        <i class="avatar | small">
          <img src="https://assets.codepen.io/285131/winking-girl.png" />
        </i>
        <span
          ><a href="#">Luna Bonifacio</a> has changed
          <a href="#">2 attributes</a> on
          <time datetime="21-01-2021">Jan 21, 2021</time></span
        >
      </div>
    </li>
    <li class="timeline-item">
      <span class="timeline-item-icon | faded-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path fill="currentColor" d="M12 13H4v-2h8V4l8 8-8 8z" />
        </svg>
      </span>
      <div class="timeline-item-description">
        <i class="avatar | small">
          <img src="https://assets.codepen.io/285131/hat-man.png" />
        </i>
        <span
          ><a href="#">Yoan Almedia</a> moved <a href="#">Eric Lubin</a> to
          <a href="#">📚 Technical Test</a> on
          <time datetime="20-01-2021">Jan 20, 2021</time></span
        >
      </div>
    </li>
    <li class="timeline-item | extra-space">
      <span class="timeline-item-icon | filled-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            fill="currentColor"
            d="M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455zM7 10v2h2v-2H7zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2z"
          />
        </svg>
      </span>
      <div class="timeline-item-wrapper">
        <div class="timeline-item-description">
          <i class="avatar | small">
            <img src="https://assets.codepen.io/285131/hat-man.png" />
          </i>
          <span
            ><a href="#">Yoan Almedia</a> commented on
            <time datetime="20-01-2021">Jan 20, 2021</time></span
          >
        </div>
        <div class="comment">
          <p>
            I've sent him the assignment we discussed recently, he is coming
            back to us this week. Regarding to our last call, I really enjoyed
            talking to him and so far he has the profile we are looking for.
            Can't wait to see his technical test, I'll keep you posted and we'll
            debrief it all together!😊
          </p>
          <button class="button">👏 2</button>
          <button class="button | square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                fill="currentColor"
                d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM7 12a5 5 0 0 0 10 0h-2a3 3 0 0 1-6 0H7z"
              />
            </svg>
          </button>
        </div>
        <button class="show-replies">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-arrow-forward"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M15 11l4 4l-4 4m4 -4h-11a4 4 0 0 1 0 -8h1" />
          </svg>
          Show 3 replies
          <span class="avatar-list">
            <i class="avatar | small">
              <img src="https://assets.codepen.io/285131/hat-man.png" />
            </i>
            <i class="avatar | small">
              <img src="https://assets.codepen.io/285131/winking-girl.png" />
            </i>
            <i class="avatar | small">
              <img src="https://assets.codepen.io/285131/smiling-girl.png" />
            </i>
          </span>
        </button>
      </div>
    </li>
  </ol>
</template>

<style lang="scss" scoped>
.timeline {
  width: 100%;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  padding: 32px 0 32px 32px;
  border-left: 2px solid #e3e3e3;
  font-size: 1.125rem;
}

.timeline-item {
  display: flex;
  gap: 24px;
  & + * {
    margin-top: 24px;
  }
  & + .extra-space {
    margin-top: 48px;
  }
}

.new-comment {
  width: 100%;
  input {
    border: 1px solid #e3e3e3;
    border-radius: 6px;
    height: 48px;
    padding: 0 16px;
    width: 100%;
    &::placeholder {
      color: #b2b2b2;
    }

    &:focus {
      border-color: #b2b2b2;
      outline: 0; // Don't actually do this
      box-shadow: 0 0 0 4px #f4f6f8;
    }
  }
}

.timeline-item-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-left: -52px;
  flex-shrink: 0;
  overflow: hidden;
  box-shadow: 0 0 0 6px #fff;
  svg {
    width: 20px;
    height: 20px;
  }

  &.faded-icon {
    background-color: #f4f6f8;
    color: #7b7b7b;
  }

  &.filled-icon {
    background-color: #688afd;
    color: #fff;
  }
}

.timeline-item-description {
  display: flex;
  padding-top: 6px;
  gap: 8px;
  color: #7b7b7b;

  img {
    flex-shrink: 0;
  }
  a {
    color: #3d3d3d;
    font-weight: 500;
    text-decoration: none;
    &:hover,
    &:focus {
      outline: 0; // Don't actually do this
      color: #688afd;
    }
  }
}

.avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  overflow: hidden;
  aspect-ratio: 1 / 1;
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  &.small {
    width: 28px;
    height: 28px;
  }

  img {
    object-fit: cover;
  }
}

.comment {
  margin-top: 12px;
  color: #3d3d3d;
  border: 1px solid #e3e3e3;
  box-shadow: 0 4px 4px 0 #f4f6f8;
  border-radius: 6px;
  padding: 16px;
  font-size: 1rem;
}

.button {
  border: 0;
  padding: 0;
  display: inline-flex;
  vertical-align: middle;
  margin-right: 4px;
  margin-top: 12px;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  height: 32px;
  padding: 0 8px;
  background-color: #f4f6f8;
  flex-shrink: 0;
  cursor: pointer;
  border-radius: 99em;

  &:hover {
    background-color: #e3e3e3;
  }

  &.square {
    border-radius: 50%;
    color: #7b7b7b;
    width: 32px;
    height: 32px;
    padding: 0;
    svg {
      width: 24px;
      height: 24px;
    }

    &:hover {
      background-color: #e3e3e3;
      color: #3d3d3d;
    }
  }
}

.show-replies {
  color: #b2b2b2;
  background-color: transparent;
  border: 0;
  padding: 0;
  margin-top: 16px;
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 1rem;
  cursor: pointer;
  svg {
    flex-shrink: 0;
    width: 24px;
    height: 24px;
  }

  &:hover,
  &:focus {
    color: #3d3d3d;
  }
}

.avatar-list {
  display: flex;
  align-items: center;
  & > * {
    position: relative;
    box-shadow: 0 0 0 2px #fff;
    margin-right: -8px;
  }
}
</style>
