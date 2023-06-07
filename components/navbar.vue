<template>
  <nav class="navbar is-light">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" to="/">Nuxt Auth</a>
        <button class="button navbar-burger">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div class="navbar-menu">
        <div class="navbar-end">
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              My Account
            </a>
            <div class="navbar-dropdown">
              <a class="navbar-item" to="/profile">My Profile</a>
              <hr class="navbar-divider"/>
              <a class="navbar-item">Logout</a>
            </div>
          </div>
          <template>
            <a class="navbar-item" to="/register">Register</a>
            <a class="navbar-item" to="/login">Log In</a>
          </template>
        </div>
      </div>
    </div>
  </nav>
</template>